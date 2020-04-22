import './PaginationItems.scss';

import React from 'react';
import classNames from 'classnames';

const PaginationItems = ({ pageSize, totalItemCount,
                           currentPage, onPaginationSelect }) => {
  const pagesItems = Math.ceil(totalItemCount / pageSize);

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

  const renderPages = pagination(currentPage, pagesItems).map((p, idx) => {
    const classes = classNames('page-item', {
      'active': currentPage === p,
    })

    return (
      <li className={classes}
          key={idx}
          onClick={p !== '...' ? (() => onPaginationSelect(p)) : undefined}>
        <div className="page-link">
          {p}
        </div>
      </li>
    );
  });

  const classPreviousNext = (p) => {
    return classNames('page-item', {
      'disabled': (p === 'Previous' && currentPage === 1)
                  || (p === 'Next' && currentPage === pagesItems),
    });
  };

  return (
    <nav className="pagination-item" aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={classPreviousNext('Previous')}
            onClick={currentPage !== 1 ?
                    (() => onPaginationSelect(currentPage - 1)) :
                    undefined}>
          <div className="page-link">Previous</div>
        </li>
          {renderPages}
        <li className={classPreviousNext('Next')}
            onClick={currentPage !== pagesItems ?
                    (() => onPaginationSelect(currentPage + 1)) :
                    undefined}>
          <div className="page-link">Next</div>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationItems;