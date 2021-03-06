import './RandomPokemon.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PokeApiService from 'services/PokeApiService';

import Spinner from 'components/Spinner';
import ErrorIndicator from 'components/ErrorIndicator';

export default class RandomPokemon extends Component {

  static defaultProps = {
    updateInterval: 100000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  pokeApiService = new PokeApiService();

  state = {
    pokemon: {},
    countPokemon: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePokemon();
    this.interval = setInterval(this.updatePokemon, updateInterval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  onPokemonLoaded = (pokemon) => {
    this.setState({
      pokemon,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePokemon = () => {
    const id = Math.round(0.5 + Math.random() * 500);

    this.pokeApiService
      .getPokemon(id)
      .then(this.onPokemonLoaded)
      .catch(this.onError);
  };

  render() {
    const { pokemon, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PokemonView pokemon={pokemon} /> : null;

    return (
      <div className="random-pokemon jumbotron rounded">
        {spinner}
        {content}
        {errorMessage}
      </div>
    );
  }
}

const PokemonView = ({ pokemon }) => {
  const { id, name, type, weight, height } = pokemon;

  return (
    <>
      <img className="pokemon-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <div>
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
      </div>
    </>
  );
};