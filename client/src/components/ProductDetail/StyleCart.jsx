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
width: 30%;
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
justify-content: end;
align-items: center;
gap: 10px;
`

const H1 = styled.h1`
margin: 0px 20px;
font-family: 'Cinzel';
font-weight: 600;
font-size: 48px;
color: Gold;
text-align: center;
`

const H4 = styled.h4`
font-family: 'OldStandard';
letter-spacing: 1px;
`

const H2 = styled.h2`
margin: ${props => props.margin};
font-family: 'Cinzel';
font-weight: 200;
color: Gold;
text-align: left;

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
        <H2 margin="0">{cStar.avg}</H2>
        <Starbar rating = {cStar.avg}/>
        <H4><A1 href="#Ratings">Read All <u>{cStar.overall}</u> Reviews</A1></H4>
      </Fdiv>
      <H2 margin="10px 20px 0">Category: {cProduct.category}</H2>
      <H1>{cProduct.name}</H1>
      <h5>{cStyle.original_price}, {cStyle.sale_price}</h5>
      <h5>Style: {cStyle.name}</h5>
      <StyleSelector/>
      <h5>SizeSelector&Quantity</h5>
      <h5>AddToCart</h5>
    </StyleDiv>
  )
}

export default StyleCart;