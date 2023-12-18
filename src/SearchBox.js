import React from 'react'

const SearchBox = ({search, setsearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="search">Search</label>
    <input 
        id='search' 
        type="text"
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e) => setsearch(e.target.value)}
    />
    </form>
  )
}

export default SearchBox