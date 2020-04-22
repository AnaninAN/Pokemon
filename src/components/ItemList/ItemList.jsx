import './ItemList.scss'

import React from 'react';
import classNames from 'classnames';

import PaginationItems from 'components/PaginationItems';

const ItemList = (props) => {
  const { data: { itemList, ...otherState }, currentPage, handlePaginationSelect,
          pokemonId, onPokemonSelected, children: renderLabel } = props;

  const number = currentPage * otherState.pageSize - otherState.pageSize + 1;

  const items = itemList.map((item, idx) => {
    const { id } = item;
    const label = renderLabel(item);

    const classes = classNames('list-group-item', {
      'active': pokemonId === id,
    });

    return (
      <li key={id}
          className={classes}
          onClick={() => onPokemonSelected(id)}>
        <span className="list-group-item__number">{number + idx}.</span> {label}
      </li>
    );
  });

  return (
    <>
      <ul className="item-list list-group" start="1">
        {items}
      </ul>
      <PaginationItems {...otherState}
                          currentPage={currentPage}
                          onPaginationSelect={handlePaginationSelect} />
    </>
  );
};

export default ItemList;