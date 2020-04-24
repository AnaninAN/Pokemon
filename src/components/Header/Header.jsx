import './Header.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ onChangeApi }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Pokemon
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/pokemon/">Pokemon</Link>
        </li>
        <li>
          <Link to="/ability/">Ability</Link>
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