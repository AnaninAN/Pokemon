import './PokemonPage.scss';

import React, { Component } from 'react';

import { PokeApiService } from 'services/PokeApiService';

import { ItemList } from 'components/ItemList';
import { PokemonDetails } from 'components/PokemonDetails';
import { ErrorIndicator } from 'components/ErrorIndicator';

export class PokemonPage extends Component {

  pokeApiService = new PokeApiService();

  state = {
    selectedPokemon: null,
    hasError: false,
  };

  handlePokemonSelected = (id) => {
    this.setState({
      selectedPokemon: id,
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onPokemonSelected={this.handlePokemonSelected}
                    pokemonId={this.state.selectedPokemon}
                    getData={this.pokeApiService.getAllPokemon} />
        </div>
        <div className="col-md-6">
          <PokemonDetails pokemonId={this.state.selectedPokemon} />
        </div>
      </div>
    );
  };
}