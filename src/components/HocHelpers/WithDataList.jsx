import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/Spinner';

const WithDataList = (View) => {
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
      this.props.getData(currentPage)
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

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.getData(this.state.currentPage);
      }
    };

    handlePaginationSelect = (idPage) => {
      this.getData(idPage);
    };

    render() {
      const { data, currentPage } = this.state;

      if (!data.itemList) {
        return (
          <li className="list-group-item d-flex">
            <Spinner />
          </li>
        );
      }

      return (
        <View
          { ...this.props}
          data={data}
          currentPage={currentPage}
          handlePaginationSelect={this.handlePaginationSelect} />
      );

    }
  };
};

WithDataList.propTypes = {
  View: PropTypes.element.isRequired,
};

export default WithDataList;