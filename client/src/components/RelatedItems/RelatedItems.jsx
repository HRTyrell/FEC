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

const MasterDiv = styled.div`
  display: table;

  border-spacing: 7px;
  margin: 0;
  padding: 0;
  line-height: 0.8;
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
    <>
      <h5>Related Products</h5>
      <MasterDiv>
        <Carousel data={relatedProductData} title="Related Products"><RelatedProducts/></Carousel>
      </MasterDiv>
      <h5>Your Outfit</h5>
      <MasterDiv>
        <Carousel data={outfitList} title="Your Outfit"><YourOutfit/></Carousel>
      </MasterDiv>
    </>

  )
}

export default RelatedItems;