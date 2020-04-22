import './PokemonPage.scss';

import React, { Component } from 'react';

import Row from 'components/Row';
import ErrorBoundry from 'components/ErrorBoundry';
import { PokemonList, PokemonDetails } from 'components/PComponents';

export default class PokemonPage extends Component {

  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={<PokemonList onPokemonSelected={this.onItemSelected} />}
          right={<PokemonDetails itemId={selectedItem} />} />
      </ErrorBoundry>
    );
  }
}