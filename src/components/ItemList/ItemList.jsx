import './ItemList.scss'

import React, { Component } from 'react';
import classNames from 'classnames';

import { PokeApiService } from 'services/PokeApiService';

import { Spinner } from 'components/Spinner';
import { ErrorIndicator } from 'components/ErrorIndicator';
import { PaginationPokemon } from 'components/PaginationPokemon';

export class ItemList extends Component {

  pokeApiService = new PokeApiService();

  state = {
    pokemonList: null,
    pageSize: null,
    totalPokemonCount: null,
    currentPage: 1,
  };

  getAllPokemon(currentPage) {
    this.setState({
      pokemonList: null,
    });
    this.pokeApiService
      .getAllPokemon(currentPage)
      .then(({ pokemonList, pageSize, totalPokemonCount }) => {
        this.setState({
          pokemonList,
          pageSize,
          currentPage,
          totalPokemonCount
        });
      });
  };

  componentDidMount() {
    this.getAllPokemon(this.state.currentPage);
  };

  handlePaginationSelect = (idPage) => {
    this.getAllPokemon(idPage);
  };

  renderItems(arr) {
    const number = this.state.currentPage * this.state.pageSize - this.state.pageSize + 1;

    return arr.map(({ id, name }, idx) => {
      const classes = classNames('list-group-item', {
        'active': this.props.pokemonId === id,
      });

      return (
        <li key={id}
            className={classes}
            onClick={() => this.props.onPokemonSelected(id)}>
          <span className="list-group-item__number">{number + idx}.</span> {name}
        </li>
      );
    });
  };

  render() {
    const { pokemonList, ...otherState } = this.state;

    const spinner = !pokemonList ? <li className="list-group-item d-flex"><Spinner /></li> : null;
    const items = pokemonList ? this.renderItems(pokemonList) : null;

    return (
      <>
        <ul className="item-list list-group" start="1">
          {spinner}
          {items}
        </ul>
        <PaginationPokemon {...otherState}
                            onPaginationSelect={this.handlePaginationSelect} />
      </>
    );
  };
};