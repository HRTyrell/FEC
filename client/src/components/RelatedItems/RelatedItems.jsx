import React, {useState, useEffect} from 'react';
import getProducts from './parseHelpers.js';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import testData from './TestData.js';

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
    <MasterDiv>
      <Carousel data={testData} title="Related Products"><RelatedProducts/></Carousel>
      <Carousel data={testData} title="Your Outfit"><YourOutfit/></Carousel>
    </MasterDiv>
  )
}

export default RelatedItems;