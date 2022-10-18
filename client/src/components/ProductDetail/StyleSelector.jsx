import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const StyleDiv = styled.div`
margin: 10px 0;
height: 400px;
width: 30%;
border: solid;
border-radius: 10px;
text-align: center;
`

const StyleCart = () => { //{Product, Product_Styles} arguments
  return (
    <StyleDiv>
      <h5>Stars</h5>
      <h5>Category</h5>
      <h5>Name</h5>
      <h5>StyleSelector</h5>
      <h5>SizeSelector</h5>
      <h5>AddToCart</h5>
    </StyleDiv>
  )
}

export default StyleCart;