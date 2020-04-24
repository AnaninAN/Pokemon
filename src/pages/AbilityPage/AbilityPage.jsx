import './AbilityPage.scss';

import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundry from 'components/ErrorBoundry';
import { AbilityList } from 'components/PComponents';

const AbilityPage = ({ history }) => {

  return (
    <ErrorBoundry>
      <AbilityList onPokemonSelected={(id) => history.push(id)} />
    </ErrorBoundry>
  );
};

export default withRouter(AbilityPage);