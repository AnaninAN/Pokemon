import './AbilityPage.scss';

import React, { Component } from 'react';

import Row from 'components/Row';
import ErrorBoundry from 'components/ErrorBoundry';
import { AbilityList, AbilityDetails } from 'components/PComponents';

export default class AbilityPage extends Component {

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
          left={<AbilityList onPokemonSelected={this.onItemSelected} />}
          right={<AbilityDetails itemId={selectedItem} />} />
      </ErrorBoundry>
    );
  }
}