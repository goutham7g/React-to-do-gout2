import React from 'react'


import ItemsList from './ItemsList';
const Content = ({items, handelCheck, handleDelete}) => {
  return (    
    <>
      {(items.length) ? (
    <ItemsList
        items={items}
        handelCheck={handelCheck}
        handleDelete={handleDelete}
    />
      ):(
        <p style={{marginTop:'2rem'}}>Your list is empty</p>
      )
}
       
    </>
  )
}

export default Content