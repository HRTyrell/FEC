import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchBar = ({setSearch}) => {
  const [value, setValue] = useState('');

  const softButton = styled.button`
    border: none;
  `

  return (
    <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      setSearch(value);
      setValue('');}}>

        <input onChange={(e)=> setValue(e.target.value)} placeholder="Search..." value={value}/>
        <softButton type="submit">Search</softButton>
      </form>
      </div>
  );
}

export default SearchBar;