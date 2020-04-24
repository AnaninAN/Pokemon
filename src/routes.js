import React from 'react';
import { Redirect } from 'react-router-dom';

import { PokemonPage, AbilityPage } from 'pages';
import { AbilityDetails } from 'components/PComponents';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <h2>This is main Page</h2>,
  },
  {
    path: '/pokemon/:id?',
    component: PokemonPage,
  },
  {
    path: '/ability/',
    exact: true,
    component: AbilityPage,
  },
  {
    path: '/ability/:id',
    render: ({ match }) => {
      const { id } = match.params;
      return <AbilityDetails itemId={id} />
    },
  },
  {
    render: () => <Redirect to="/" />,
  },
];

export default routes;