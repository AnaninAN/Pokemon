import React from 'react';

import { WithPokeApiService } from 'components/HocHelpers';

import ItemDetails, { Record } from 'components/ItemDetails';

const PokemonDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field="type" label="Type" />
      <Record field="weight" label="Weight" />
      <Record field="height" label="Height" />

    </ItemDetails>
  );
};

const mapMethodsToProps = (pokeApiService) => {
  return {
    getData: pokeApiService.getPokemon,
    getImageUrl: pokeApiService.getPokemonImage
  };
};

export default WithPokeApiService(mapMethodsToProps)(PokemonDetails);