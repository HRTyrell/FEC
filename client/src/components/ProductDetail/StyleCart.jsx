import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import StyleSelector from "./StyleSelector.jsx"
import ProductStore from "../Provider/Zus_Provider.jsx";

const StyleDiv = styled.div`
margin: 10px 0;
height: 400px;
width: 30%;
border: solid;
border-radius: 10px;
text-align: center;
`

const StyleCart = () => {

  const cProduct = ProductStore((state) => state.curProduct);
  const cStyle = ProductStore((state) => state.curStyle);

  if (!cProduct || !cStyle) {
    return null;
  }

  console.log('I am prod', cProduct)
  console.log('I am style', cStyle)

  return (
    <StyleDiv>
      <h5>Stars</h5>
      <h5>{cProduct.category}</h5>
      <h5>{cProduct.name}</h5>
      <h5>{cStyle.original_price}, {cStyle.sale_price}</h5>
      <h5>Style: {cStyle.name}</h5>
      <StyleSelector/>
      <h5>SizeSelector</h5>
      <h5>AddToCart</h5>
    </StyleDiv>
  )
}

export default StyleCart;