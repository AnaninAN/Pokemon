import './ErrorIndicator.scss';

import React from 'react';

import icon from './death-star.png';

export const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent pokemon to fix it)
      </span>
    </div>
  );
};