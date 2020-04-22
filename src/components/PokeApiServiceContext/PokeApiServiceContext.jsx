import React from 'react';

const {
  Provider : PokeApiServiceProvider,
  Consumer : PokeApiServiceConsumer
} = React.createContext();

export {
  PokeApiServiceProvider,
  PokeApiServiceConsumer
};