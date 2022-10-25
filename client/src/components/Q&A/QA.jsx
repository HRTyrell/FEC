import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import SearchBar from './/SearchBar.jsx';
import QAList from './/QAList.jsx';

const MainDiv = styled.div`
  width: 70%;
  padding: 20px;
  border: solid;
`

  const QA = (/* product_id */ ) => {
    const [search, setSearch] = useState('');

    return (
      <MainDiv>
        <h2> QUESTIONS & ANSWERS</h2>
        <SearchBar setSearch={setSearch}/>
        <QAList search={search} />
      </MainDiv>
    );
  }

export default QA;