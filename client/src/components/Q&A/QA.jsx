import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import SearchBar from './/SearchBar.jsx';
import QAList from './/QAList.jsx';

const mainDiv = styled.div`
display: flex;
width: 70%;
`

  const QA = (/* product_id */ ) => {
    const [search, setSearch] = useState('');

    return (
      <mainDiv>
        <h2>Questions & Answers</h2>
        <SearchBar setSearch={setSearch}/>
        <QAList search={search} />
      </mainDiv>
    );
  }

export default QA;