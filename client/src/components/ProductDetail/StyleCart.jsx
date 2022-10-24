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
/* align-items: center; */

/* border: solid; */
background: rgba(81, 29, 102,0.7819502801120448);
border-radius: 30px;
text-align: center;
box-shadow: 15px 15px 30px #aa82dac7,
            -10px -5px 30px #ffffff;
`

const Fdiv = styled.div`
margin: 0px 20px;
height: 50px;
display:flex;
flex-direction: row;
justify-content: start;
align-items: center;
gap: 10px;
text-align: left;
`

const H2 = styled.h2`
font-family: 'Cinzel';
color: Gold;
`
const PH2 = styled.h2`
font-family: 'Cinzel';
color: Gold;
`
const A1 = styled.a`
color: Gold;
text-decoration: none;
`


const StyleCart = () => {

  const cProduct = ProductStore((state) => state.curProduct);
  const cStyle = ProductStore((state) => state.curStyle);
  const cStar = ProductStore((state) => state.curStars);

  if (!cProduct || !cStyle) {
    return null;
  }

  console.log(cProduct)

  return (
    <StyleDiv>
      <Fdiv>
        <PH2>{cStar.avg}</PH2>
        <Starbar rating = {cStar.avg}/>
        <h5><A1 href="#Ratings">Read All <u>{cStar.overall}</u> Reviews</A1></h5>
      </Fdiv>
      <h5>{cProduct.category}</h5>
      <H2>{cProduct.name}</H2>
      <h5>{cStyle.original_price}, {cStyle.sale_price}</h5>
      <h5>Style: {cStyle.name}</h5>
      <StyleSelector/>
      <h5>SizeSelector&Quantity</h5>
      <h5>AddToCart</h5>
    </StyleDiv>
  )
}

export default StyleCart;