import './App.scss';

import React, { Component } from 'react';

import PokeApiService from 'services/PokeApiService';

import Header from 'components/Header';
import RandomPokemon from 'components/RandomPokemon';
import PokemonPage from 'pages/PokemonPage';
import ErrorButton from 'components/ErrorButton';
import ErrorIndicator from 'components/ErrorIndicator';

export default class App extends Component {

  pokeApiService = new PokeApiService();

  state = {
    showRandomPokemon: true,
    hasError: false
  };

  toggleRandomPokemon = () => {
    this.setState((state) => {
      return {
        showRandomPokemon: !state.showRandomPokemon
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { getAllPokemon, getAllAbility } = this.pokeApiService;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const randomPokemon = this.state.showRandomPokemon ? <RandomPokemon /> : null;

    return (
      <div className="app-pokemon">
        <Header />
        {randomPokemon}

        <div className="row mb2 button-row">
          <button
            className="toggle-pokemon btn btn-warning btn-lg"
            onClick={this.toggleRandomPokemon}>
            Toggle Random Pokemon
          </button>
          <ErrorButton />
        </div>

        <PokemonPage />
      </div>
    );
  }
}