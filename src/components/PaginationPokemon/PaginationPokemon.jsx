import './PaginationPokemon.scss';

import React from 'react';
import classNames from 'classnames';

export const PaginationPokemon = ({ pageSize, totalPokemonCount,
                                    currentPage, onPaginationSelect }) => {
  const pagesPokemon = Math.ceil(totalPokemonCount / pageSize);

  const pagination = (num, limit, range = 3) => {
    let arr = [];
    const lP = range * 3 + 2;

    for (let i = 1; i <= limit; i++) {
      if ((i <= range || (i <= lP - range - 1 && num <= lP - range - 1)) ||
          (i > num - range/2 && i < num + range/2 && num >= lP - range && num <= limit - lP + range + 1) ||
          (i > limit - range || (i > limit - lP + range + 1 && num > limit - lP + range + 1 ))) {
        if (arr[arr.length - 1] && i != arr[arr.length - 1] + 1) {
          arr.push('...');
        }
        arr.push(i);
      }
    }

    return arr;
  }

  const renderPages = pagination(currentPage, pagesPokemon).map((p, idx) => {
    const classes = classNames('page-item', {
      'active': currentPage === p,
    })

    return (
      <li className={classes}
          key={idx}
          onClick={p !== '...' ? (() => onPaginationSelect(p)) : undefined}>
        <a className="page-link" href="#">
          {p}
        </a>
      </li>
    );
  });

  const classPreviousNext = (p) => {
    return classNames('page-item', {
      'disabled': (p === 'Previous' && currentPage === 1)
                  || (p === 'Next' && currentPage === pagesPokemon),
    });
  };

  return (
    <nav className="pagination-pokemon" aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={classPreviousNext('Previous')}
            onClick={currentPage !== 1 ?
                    (() => onPaginationSelect(currentPage - 1)) :
                    undefined}>
          <a className="page-link" href="#">Previous</a>
        </li>
          {renderPages}
        <li className={classPreviousNext('Next')}
            onClick={currentPage !== pagesPokemon ?
                    (() => onPaginationSelect(currentPage + 1)) :
                    undefined}>
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  );
};