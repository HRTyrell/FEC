import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const DivS = styled.div`
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
`

const InfoDiv = styled.div`
margin: 20px 0;
display: flex;
flex-direction: row;
width: 70%;
text-align: center;
border-radius: 30px;
background: #e0e0e0;
box-shadow: 15px 15px 30px #bebebe,
            -15px -15px 30px #ffffff;
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
              <li key={index}>
                The {item.feature} is {item.value}
              </li>
          )
        })}
      </DivS2>
    </InfoDiv>
  )
}

export default ProductInformation;