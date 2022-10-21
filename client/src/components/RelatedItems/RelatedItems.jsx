import React, {useState, useEffect} from 'react';
import getProducts from './parseHelpers.js';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import testData from './TestData.js';
import {getRelatedProducts} from './parseHelpers.js';
import {useRelatedItemsStore} from './RelatedItemsStore.jsx';

const Title = styled.h1`

`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
const MasterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  width: 80%;
  // height: 15em;
  border-spacing: 0.5%;
  margin: 0;
  padding: 0;
  line-height: 0.8;
`;
const H = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  margin-block-start: 2em;
  margin-block-end: 0;
`;

const RelatedItems = () => {

  const setRelatedItems = useRelatedItemsStore(state => state.setRelatedItems);
  useEffect(() => {
    getRelatedProducts('66643').then(items => {
      setRelatedItems(items);
    })
  }, [])

  const relatedProductData = useRelatedItemsStore(state => state.relatedItemsList);
  const outfitList = useRelatedItemsStore(state => state.outfitList);

  return (
    <Div>
      <H>Related Products</H>
      <MasterDiv>
        <Carousel data={relatedProductData} title="Related Products"><RelatedProducts/></Carousel>
      </MasterDiv>
      <H>Your Outfit</H>
      <MasterDiv>
        <Carousel data={outfitList} title="Your Outfit"><YourOutfit/></Carousel>
      </MasterDiv>
    </Div>

  )
}

export default RelatedItems;