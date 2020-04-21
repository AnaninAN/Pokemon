import './PokemonPage.scss';

import React, { Component } from 'react';

import PokeApiService from 'services/PokeApiService';

import ItemList from 'components/ItemList';
import ItemDetails, { Record } from 'components/ItemDetails';
import Row from 'components/Row';
import ErrorBoundry from 'components/ErrorBoundry';

export default class PokemonPage extends Component {

  pokeApiService = new PokeApiService();

  state = {
    selectedPokemon: null,
  };

  handlePokemonSelected = (id) => {
    this.setState({
      selectedPokemon: id,
    });
  };

  render() {

    const { getAllPokemon, getPokemon, getPokemonImage } = this.pokeApiService;

    const itemList = (
      <ItemList onPokemonSelected={this.handlePokemonSelected}
                pokemonId={this.state.selectedPokemon}
                getData={getAllPokemon} >
        {(i) => `${i.name}`}
      </ItemList>
    );

    const pokemonDetails = (
      <ItemDetails
        itemId={this.state.selectedPokemon}
        getData={getPokemon}
        getImageUrl={getPokemonImage}>

        <Record field="type" label="Type" />
        <Record field="weight" label="Weight" />
        <Record field="height" label="Height" />

      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={pokemonDetails} />
      </ErrorBoundry>
    );
  }
}