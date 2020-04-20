import './Header.scss';

import React from 'react';

export const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Pokemon
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Pokemon</a>
        </li>
        <li>
          <a href="#">Ability</a>
        </li>
      </ul>
    </div>
  );
};