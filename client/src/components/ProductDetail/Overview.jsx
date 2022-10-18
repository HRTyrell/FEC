import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

import {URL, TOKEN} from '/MyConfig.js';
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

  const [product, setProduct] = useState('');
  const [Styles, setStyles] = useState('');

  useEffect(() => {
    return  axios.get('/products', {
      baseURL: URL,
      headers: { 'Authorization': TOKEN
    }}).then(res => {
        return res;
    }).catch(err => {
      console.log(err);
    });
  }, [])

  return (
    <>
      <S2div>
        <Gallery Style = {Styles}/>
        <StyleSelector Style = {Styles} Product = {product} StyleChange = {(choice) => setStyles(choice)} />
      </S2div>
      <ProductInformation Product = {product}/>
    </>
  )
}

export default Overview;