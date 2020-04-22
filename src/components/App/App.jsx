import './App.scss';

import React, { Component } from 'react';

import PokeApiService from 'services/PokeApiService';
import DummyPokeApiService from 'services/DummyPokeApiService';
import { PokeApiServiceProvider } from 'components/PokeApiServiceContext';

import Header from 'components/Header';
import RandomPokemon from 'components/RandomPokemon';
import { PokemonPage, AbilityPage } from 'pages';
import ErrorBoundry from 'components/ErrorBoundry';

export default class App extends Component {

  state = {
    pokeApiService: new PokeApiService(),
  };

  onChangeApi = () => {
    this.setState(({ pokeApiService }) => {
      const Service = pokeApiService instanceof PokeApiService ?
                      DummyPokeApiService : PokeApiService;

      return {
        pokeApiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <PokeApiServiceProvider value={this.state.pokeApiService}>
          <div className="app-pokemon">

            <Header onChangeApi={this.onChangeApi} />
            <RandomPokemon />
            <PokemonPage />
            <AbilityPage />

          </div>
        </PokeApiServiceProvider>
      </ErrorBoundry>
    );
  }
}