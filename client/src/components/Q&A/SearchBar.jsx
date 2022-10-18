import React, { useState, useEffect } from 'react';

const SearchBar = ({setSearch}) => {
  const [value, setValue] = useState('');

  return (
    <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      setSearch(value);
      setValue('');}}>

        <input onChange={(e)=> setValue(e.target.value)} placeholder="Search..." value={value}/>
        <button type="submit">Go!</button>
      </form>
      </div>
  );
}

export default SearchBar;