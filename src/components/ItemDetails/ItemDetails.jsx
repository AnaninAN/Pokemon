import './ItemDetails.scss';

import React, { Component } from 'react';

import PokeApiService from 'services/PokeApiService';

import Spinner from 'components/Spinner';
import ErrorButton from 'components/ErrorButton';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {

  pokeApiService = new PokeApiService();

  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
        });
      });
  };

  render() {

    if (!this.state.item) {
      return (
        <div className="item-details card">
          <span>Select a item from a list</span>
        </div>
      );
    }

    const { item, image } = this.state;

    return (
      <div className="item-details card">
        <img className="item-image"
        src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        <ErrorButton />
      </div>
      </div>
    );
  }
}