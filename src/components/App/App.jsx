import './App.scss';

import React, { Component } from 'react';

import { Header } from 'components/Header';
import { RandomPokemon } from 'components/RandomPokemon';
import { ItemList } from 'components/ItemList';
import { PokemonDetails } from 'components/PokemonDetails';

export class App extends Component {

  state = {
    selectedPokemon: null,
  };

  handlePokemonSelected = (id) => {
    this.setState({
      selectedPokemon: id,
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPokemon />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPokemonSelected={this.handlePokemonSelected}
                      pokemonId={this.state.selectedPokemon} />
          </div>
          <div className="col-md-6">
            <PokemonDetails pokemonId={this.state.selectedPokemon} />
          </div>
        </div>
      </div>
    );
  };
};