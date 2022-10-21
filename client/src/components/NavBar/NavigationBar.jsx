import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const Title = styled.h1`
display: block;
background-color: White;
color: black;
text-align: center;
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
`;


const NavigationBar = () => {

  const Product = ProductStore((state) => state.Products);
  const setProduct = ProductStore((state) => state.setCurProduct);

  if (!Product) {
    return null;
  }

  console.log(Product);

  return (
    <Wrap>
      <Title>NavigationBar</Title>
      <H5>Sales | Deals | Promotions</H5>
      <Sdiv>
        {Product.map((info) => {
          return(
            <h4 key={info.id} title={info.name} onClick = {(e) => setProduct(e.target.title)}>{info.name}  |&nbsp;&nbsp;</h4>
          )
        })}
      </Sdiv>
    </Wrap>
  )
}

export default NavigationBar;