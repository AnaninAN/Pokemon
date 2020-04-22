import React from 'react';

import { PokeApiServiceConsumer } from 'components/PokeApiServiceContext';

const WithPokeApiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <PokeApiServiceConsumer>
        {
          (pokeApiService) => {
            const serviceProps = mapMethodsToProps(pokeApiService);
            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </PokeApiServiceConsumer>
    );
  };
};

export default WithPokeApiService;