import React, { Component } from 'react';

import { Spinner } from 'components/Spinner';
import { ErrorIndicator } from 'components/ErrorIndicator';

export const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: {
        itemList: null,
        pageSize: null,
        totalItemCount: null,
      },
      currentPage: 1,
    };

    getData(currentPage) {
      getData(currentPage)
        .then((data) => {
          this.setState({
            data,
            currentPage,
          });
        });
    };

    componentDidMount() {
      this.getData(this.state.currentPage);
    };

    handlePaginationSelect = (idPage) => {
      this.getData(idPage);
    };

    render() {
      
    };
  };
};