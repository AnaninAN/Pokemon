import './App.scss';

import React, { Component } from 'react';

import { Header } from 'components/Header';
import { RandomPokemon } from 'components/RandomPokemon';
import { PokemonPage } from 'pages/PokemonPage';
import { ErrorButton } from 'components/ErrorButton';
import { ErrorIndicator } from 'components/ErrorIndicator';

export class App extends Component {

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

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const pokemon = this.state.showRandomPokemon ? <RandomPokemon /> : null;

    return (
      <div className="app">
        <Header />
        {pokemon}

        <div className="row mb2 button-row">
          <button
            className="toggle-pokemon btn btn-warning btn-lg"
            onClick={this.toggleRandomPokemon}>
            Toggle Random Pokemon
          </button>
          <ErrorButton />
        </div>

        <PokemonPage />
        <PokemonPage />
        <PokemonPage />
      </div>
    );
  };
};