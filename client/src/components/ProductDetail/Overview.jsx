import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

import {URL, TOKEN} from '/MyConfig.js';
import ProductInformation from "./ProductInformation.jsx";
import StyleCart from "./StyleCart.jsx";
import Gallery from "./Gallery.jsx";
import ProductStore from "../Provider/Zus_Provider.jsx";

const S2div = styled.div`
display: flex;
width: 70%;
flex-direction: row;
/* flex-wrap: wrap; */
gap: 30px;
justify-content: center;
align-items: center;
/* text-align: center; */
`

const Overview = () => {

  // const Product = ProductStore((state) => state.Products);
  // const cProduct = ProductStore((state) => state.curProduct);
  // const cStyle = ProductStore((state) => state.curStyle);
  // const Styles = ProductStore((state) => state.curProductStyles);

  const setup = ProductStore((state) => state.getProducts);

  useEffect(() => {
    console.log('Running!');
    setup();
  }, [])

  // console.log('I AM PRODUCT', Product);
  // console.log('I AM cPRODUCT', cProduct);
  // console.log('I AM cStyle', cStyle);
  // console.log('I AM Styles', Styles);

  return (
    <>
      <S2div>
        <Gallery/>
        <StyleCart/>
      </S2div>
      <ProductInformation/>
    </>
  )
}

export default Overview;