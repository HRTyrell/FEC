import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const H2 = styled.h2`
margin: ${props => props.margin};
font-family: 'Cinzel';
font-weight: 200;
color: ${props => props.color || 'Gold'};
text-align: left;
font-size: 32px;
`

const SzButton = styled.button`
Color: Black;
background: Gold;
font-family: 'Cinzel'
font-weight: 900;
border: solid;
width:45px;
height:40px;
:disabled {
  background: gray;
}
`

const Adiv = styled.div`
max-width: 100%;
padding: 10px 20px;
display:flex;
flex-direction:row;
gap: 5px;
align-items: center;
justify-content: space-between;
`

const SizeSelector = ({style}) => {

  const [size, setSize] = useState({XS:false, S: false, M: false, L:false, XL: false, XXL: false})

  const setsSize = (value) => {
    for (let elem in size) {
      size[elem] = false;
      if (elem === value) {
        size[elem] = true;
      }
    }
  }

  return(
    <div>
      <Adiv>
        <H2 margin="0px 20px 0">Size -</H2>
        <SzButton value = "XS" onClick={(e) => setsSize(e.target.value)} disabled = {size.XS}>XS</SzButton>
        <SzButton value = "S" onClick={(e) => setsSize(e.target.value)} disabled = {size.S}>S</SzButton>
        <SzButton value = "M" onClick={(e) => setsSize(e.target.value)} disabled = {size.M}>M</SzButton>
        <SzButton value = "L" onClick={(e) => setsSize(e.target.value)} disabled = {size.L}>L</SzButton>
        <SzButton value = "XL" onClick={(e) => setsSize(e.target.value)} disabled = {size.XL}>XL</SzButton>
        <SzButton value = "XXL" onClick={(e) => setsSize(e.target.value)} disabled = {size.XXL}>XXL</SzButton>
      </Adiv>
      <H2 margin="0px 20px 0">Quantity</H2>
      <select>
        <option>1</option>
      </select>
    </div>
  )
}

export default SizeSelector;