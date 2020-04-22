import React from 'react';

import {
  WithDataList,
  WithPokeApiService,
  compose,
  withChildFunction } from 'components/HocHelpers';

import ItemList from 'components/ItemList';

const renderName = ({name}) => <span>{name}</span>;

const mapPokemonMethodsToProps = (pokeApiService) => {
  return {
    getData: pokeApiService.getAllPokemon
  };
};

const mapAbilityMethodsToProps = (pokeApiService) => {
  return {
    getData: pokeApiService.getAllAbility
  };
};

const PokemonList = compose(
                      WithPokeApiService(mapPokemonMethodsToProps),
                      WithDataList,
                      withChildFunction(renderName)
                    )(ItemList);

const AbilityList = compose(
                      WithPokeApiService(mapAbilityMethodsToProps),
                      WithDataList,
                      withChildFunction(renderName)
                    )(ItemList);

export {
  PokemonList,
  AbilityList,
};