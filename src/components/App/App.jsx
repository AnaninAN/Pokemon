import './App.scss';

import React from 'react';

import { Header } from 'components/Header';
import { RandomPokemon } from 'components/RandomPokemon';
import { ItemList } from 'components/ItemList';
import { PokemonDetails } from 'components/PokemonDetails';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <RandomPokemon />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PokemonDetails />
        </div>
      </div>
    </div>
  );
};