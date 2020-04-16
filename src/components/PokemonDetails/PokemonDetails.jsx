import './PokemonDetails.scss';

import React, { Component } from 'react';

export class PokemonDetails extends Component {
  render() {
    return (
      <div className="pokemon-details card">
        <img className="pokemon-image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />

        <div className="card-body">
          <h4>Pikachu</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Type</span>
              <span>electric</span>
            </li>
            <li className="list-group-item">
              <span className="term">Weight</span>
              <span>60</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height</span>
              <span>4</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
}