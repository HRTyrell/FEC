import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const Title = styled.h1`
display: block;
background-color: White;
color: black;
text-align: center;
font-family: 'Cinzel';
font-weight: 400;
`;

const Wrap = styled.div`
padding: 3em 0;
width: 100%;
background: white;
border-bottom: solid;
text-align: center;
`;

const Sdiv = styled.div`
display:flex;
flex-direction: row;
text-align: center;
justify-content: center;
align-items:center;
`;

const H5 = styled.h5`
display: block;
background-color: white;
color: black;
text-align: center;
font-family: 'OldStandard';
`;


const NavigationBar = () => {

  const Product = ProductStore((state) => state.Products);
  const setProduct = ProductStore((state) => state.setCurProduct);

  if (!Product) {
    return null;
  }

  return (
    <Wrap id="ProductInfo1">
      <Title>NavigationBar</Title>
      <H5>Sales | Deals | Promotions</H5>
      <Sdiv>
        {Product.map((info) => {
          return(
            <H5 key={info.id} title={info.name} onClick = {(e) => setProduct(e.target.title)}>{info.name}  |&nbsp;&nbsp;</H5>
          )
        })}
      </Sdiv>
    </Wrap>
  )
}

export default NavigationBar;