import React from 'react';

import { WithPokeApiService } from 'components/HocHelpers';

import ItemDetails, { Record } from 'components/ItemDetails';

const AbilityDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field="shortEffect" label="Short Effect" />
      <Record field="effect" label="Effect" />

    </ItemDetails>
  );
};

const mapMethodsToProps = (pokeApiService) => {
  return {
    getData: pokeApiService.getAbility,
    getImageUrl: pokeApiService.getAbilityImage
  };
};

export default WithPokeApiService(mapMethodsToProps)(AbilityDetails);