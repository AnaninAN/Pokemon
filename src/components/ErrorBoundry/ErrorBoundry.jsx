import './ErrorBoundry.scss';

import React, { Component } from 'react';

import { ErrorIndicator } from 'components/ErrorIndicator';

export class ErrorBoundry extends Component {

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  };
}