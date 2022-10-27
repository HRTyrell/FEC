import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const DivS = styled.div`
margin: 0 20px;
display: flex;
flex-direction: column;
text-align: left;
width: 75%;
`
const DivS2 = styled.div`
margin: 10px 0;
display: flex;
width: 25%;
flex-direction: column;
border-left: solid;
justify-content: center;
align-items: center;
text-align: center;
@media (max-width: 1300px) {
  width: 40%
}
`

const InfoDiv = styled.div`
margin: 20px 0;
display: flex;
flex-direction: row;
width: 70%;
border-top: double;

background: white;
text-align: center;
/* box-shadow: 15px 15px 30px #5f5f5f,
            -10px -5px 30px #ffffff; */
@media (max-width: 1300px) {
  width: 100%;
}
`

//Completion of props and state
//TODO CSS alignment and styling

const ProductInformation = () => {
  const curProduct = ProductStore((state) => state.curProduct)


  if (!curProduct) {
    return null;
  }

  return (
    <InfoDiv>
      <DivS>
        <h5>{curProduct.slogan}</h5>
        <h5>{curProduct.description}</h5>
      </DivS>
      <DivS2>
        <h5>Features</h5>
        {curProduct.features.map((item, index) => {
          return (
              <h5 key={index}>
                {item.feature}: {item.value}
              </h5>
          )
        })}
      </DivS2>
    </InfoDiv>
  )
}

export default ProductInformation;