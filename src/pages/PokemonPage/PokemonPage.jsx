import './PokemonPage.scss';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Row from 'components/Row';
import ErrorBoundry from 'components/ErrorBoundry';
import { PokemonList, PokemonDetails } from 'components/PComponents';

const PokemonPage = ({ match, history }) => {
    const { id } = match.params;

    return (
      <ErrorBoundry>
        <Row
          left={<PokemonList onPokemonSelected={(id) => history.push(id)} />}
          right={<PokemonDetails itemId={id} />} />
      </ErrorBoundry>
    );
};

export default withRouter(PokemonPage);