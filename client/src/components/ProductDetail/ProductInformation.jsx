import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const Title = styled.h1`
color: blue;
`;

const InfoDiv = styled.div`
/* height: 400px; */
width: 70%;
border: solid;
border-radius: 10px;
text-align: center;
`

const ProductInformation = () => { //Product



  return (
    <InfoDiv>
      <Title>ProductInformation</Title>
    </InfoDiv>
  )
}

export default ProductInformation;