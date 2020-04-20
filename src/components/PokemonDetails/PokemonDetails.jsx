import './PokemonDetails.scss';

import React, { Component } from 'react';

import { PokeApiService } from 'services/PokeApiService';

import { Spinner } from 'components/Spinner';
import { ErrorButton } from 'components/ErrorButton';

export class PokemonDetails extends Component {

  pokeApiService = new PokeApiService();

  state = {
    pokemon: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePokemon();
  };

  componentDidUpdate(prevProps) {
    if (this.props.pokemonId !== prevProps.pokemonId) {
      this.updatePokemon();
    }
  };

  updatePokemon() {
    const { pokemonId } = this.props;

    if (!pokemonId) {
      return;
    }

    this.pokeApiService
      .getPokemon(pokemonId)
      .then((pokemon) => {
        this.setState({
          pokemon,
          loading: false,
        });
      });
  };

  render() {

    if (!this.state.pokemon) {
      return (
        <div className="pokemon-details card">
          <span>Select a pokemon from a list</span>
        </div>
      );
    }

    const { pokemon, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PokemonDetailsView pokemon={pokemon} /> : null;

    return (
      <div className="pokemon-details card">
        {spinner}
        {content}
      </div>
    );
  };
}

const PokemonDetailsView = ({ pokemon }) => {
  const {id, name, type, weight, height} = pokemon;

  return (
    <>
      <img className="pokemon-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Type</span>
            <span>{type}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Weight</span>
            <span>{weight}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Height</span>
            <span>{height}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};