import './ItemList.scss'

import React, { Component } from 'react';
import classNames from 'classnames';

import Spinner from 'components/Spinner';
import PaginationItems from 'components/PaginationItems';

export default class ItemList extends Component {

  state = {
    data: {
      itemList: null,
      pageSize: null,
      totalItemCount: null,
    },
    currentPage: 1,
  };

  getData(currentPage) {
    const { getData } = this.props;
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

  renderItems(arr) {
    const { currentPage, data : { pageSize } } = this.state;
    const number = currentPage * pageSize - pageSize + 1;

    return arr.map((item, idx) => {
      const { id } = item;
      const label = this.props.children(item);

      const classes = classNames('list-group-item', {
        'active': this.props.pokemonId === id,
      });

      return (
        <li key={id}
            className={classes}
            onClick={() => this.props.onPokemonSelected(id)}>
          <span className="list-group-item__number">{number + idx}.</span> {label}
        </li>
      );
    });
  };

  render() {
    const { data: { itemList, ...otherState }, currentPage } = this.state;

    const spinner = !itemList ? <li className="list-group-item d-flex"><Spinner /></li> : null;
    const items = itemList ? this.renderItems(itemList) : null;

    return (
      <>
        <ul className="item-list list-group" start="1">
          {spinner}
          {items}
        </ul>
        <PaginationItems {...otherState}
                            currentPage={currentPage}
                            onPaginationSelect={this.handlePaginationSelect} />
      </>
    );
  }
}