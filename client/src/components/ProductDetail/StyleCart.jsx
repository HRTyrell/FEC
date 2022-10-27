import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import StyleSelector from "./StyleSelector.jsx"
import ProductStore from "../Provider/Zus_Provider.jsx";
import Starbar from "./starbar.jsx";
import { FullArrow } from "../Shapes/Shapes.jsx";
import SizeSelector from "./SizeSelector.jsx";

const StyleDiv = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0;
height: 1000px;
width: 30%;
gap: 20px;
/* align-items: center; */

/* border: solid; */
background: white;
border-radius: 30px;
text-align: center;
box-shadow: 15px 15px 30px #ecc3ea,
            -10px -5px 30px #ecc3ea;
`

const Fdiv = styled.div`
margin: 0px 20px;
height: 50px;
display:flex;
flex-direction: row;
justify-content: start;
align-items: center;
gap: 10px;
`

const F2div = styled.div`
margin: 0px 20px;
height: 50px;
display:flex;
flex-direction: row;
justify-content: start;
align-items: center;
gap: 10px;
`

const F3div = styled.div`
/* margin: 0px 20px;
height: 50px; */
display:flex;
flex-direction: row;
/* justify-content: start;
align-items: center;
gap: 10px; */
`

const H1 = styled.h1`
margin: 0px 20px;
font-family: 'Cinzel';
font-weight: 400;
font-size: 52px;
color: ${props => props.color || 'Black'};
text-align: left;
`

const H4 = styled.h4`
margin: ${props => props.margin || "0"};
font-family: 'OldStandard';
letter-spacing: 1px;
color: ${props => props.color || 'Black'};
font-size: ${props => props.size || "14px"};
`

const H2 = styled.h2`
margin: ${props => props.margin};
font-family: 'Cinzel';
font-weight: 200;
color: ${props => props.color || 'Black'};
text-align: left;
font-size: 32px;

`

const A1 = styled.a`
color: Black;
text-decoration: none;
`


const StyleCart = () => {

  const cProduct = ProductStore((state) => state.curProduct);
  const cStyle = ProductStore((state) => state.curStyle);
  const cStar = ProductStore((state) => state.curStars);

  if (!cProduct || !cStyle) {
    return null;
  }

  let price = (cStyle.sale_price) ? <F3div><H2 margin="0 20px">Price:&nbsp;<strike>${cStyle.original_price}</strike></H2><H2 color="red" margin="0">&nbsp;${cStyle.sale_price}</H2></F3div> : <F3div><H2 margin="0 20px">Price:&nbsp;${cStyle.original_price}</H2><H2 margin="0 20px" height="32px">&nbsp;</H2></F3div>

  console.log(cStyle)

  return (
    <StyleDiv>
      <Fdiv>
        <Starbar rating = {cStar.avg}/>
        <H4><A1 href="#Ratings">Read All <u>{cStar.overall}</u> Reviews</A1></H4>
      </Fdiv>
      <H1>{cProduct.name}</H1>
      <H2 margin="10px 20px 0">Category: {cProduct.category}</H2>
      {price}
      <div>
        <H2 margin="0px 20px 0">Style:</H2>
        <F2div>
          <FullArrow/>
          <H4 margin ="0 40px" size="20px">{cStyle.name}</H4>
        </F2div>
      </div>
      <StyleSelector/>
      <SizeSelector style ={cStyle}/>
      <button>AddToCart</button>
      <div>
        <li>Facebook</li>
        <li>Pintrest</li>
        <li>Twitter</li>
      </div>
    </StyleDiv>
  )
}

export default StyleCart;