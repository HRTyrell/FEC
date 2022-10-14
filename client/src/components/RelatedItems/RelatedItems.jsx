import {useState, useEffect} from 'react';
import getProducts from './parseHelpers.js';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import styled from 'styled-components';

const Title = styled.h1`

`;

const MasterDiv = styled.div`
  display: table;
  border-spacing: 7px;
  margin: 0;
  padding: 0;
  line-height: 0.8;
`;

const RelatedItems = () => {



  return (
    <>
      <Title>Related Products</Title>
    <MasterDiv>
      <RelatedProducts />
      <YourOutfit />
    </MasterDiv>
    </>
  )
}

export default RelatedItems;