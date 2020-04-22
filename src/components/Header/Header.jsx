import './Header.scss';

import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onChangeApi }) => {
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
      <button
        className="btn btn-primary btn-sm"
        onClick={onChangeApi}>
        Change Api
      </button>
    </div>
  );
};

Header.propTypes = {
  onChangeApi: PropTypes.func.isRequired,
};

export default Header;