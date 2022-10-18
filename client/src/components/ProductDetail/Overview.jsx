import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ProductInformation from "./ProductInformation.jsx";
import StyleSelector from "./StyleSelector.jsx";
import Gallery from "./Gallery.jsx";

const S2div = styled.div`
display: flex;
width: 70%;
flex-direction: row;
gap: 10px;
justify-content: center;
align-items: center;
/* text-align: center; */
`

const Overview = () => {
  return (
    <>
      <S2div>
        <Gallery />
        <StyleSelector />
      </S2div>
      <ProductInformation />
    </>
  )
}

export default Overview;