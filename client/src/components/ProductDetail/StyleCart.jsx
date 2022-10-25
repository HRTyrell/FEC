import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import StyleSelector from "./StyleSelector.jsx"
import ProductStore from "../Provider/Zus_Provider.jsx";
import Starbar from "./starbar.jsx";

const StyleDiv = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0;
height: 800px;
width: 40%;
align-items: center;
/* border: solid; */
background: #e7b9f3;
border-radius: 30px;
text-align: center;
box-shadow: 15px 15px 30px #cf6ae9,
            -15px -15px 30px #ffffff;
`

const StyleCart = () => {

  const cProduct = ProductStore((state) => state.curProduct);
  const cStyle = ProductStore((state) => state.curStyle);
  const cStar = ProductStore((state) => state.curStars);

  if (!cProduct || !cStyle) {
    return null;
  }

  return (
    <StyleDiv>
      <Starbar rating = {cStar}/>
      <h5>{cStar}</h5>
      <h5>{cProduct.category}</h5>
      <h5>{cProduct.name}</h5>
      <h5>{cStyle.original_price}, {cStyle.sale_price}</h5>
      <h5>Style: {cStyle.name}</h5>
      <StyleSelector/>
      <h5>SizeSelector&Quantity</h5>
      <h5>AddToCart</h5>
    </StyleDiv>
  )
}

export default StyleCart;