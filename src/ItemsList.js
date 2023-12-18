import React from 'react'

import LineItem from './LineItem';
const ItemsList = ({items, handelCheck, handleDelete}) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
        item={item}
        key={item.id}
        handelCheck={handelCheck}
        handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ItemsList