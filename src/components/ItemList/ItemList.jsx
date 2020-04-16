import './ItemList.scss'

import React, { Component } from 'react';

export class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Pikachu
        </li>
        <li className="list-group-item">
          Bulbasaur
        </li>
        <li className="list-group-item">
          Butterfree
        </li>
      </ul>
    );
  };
};