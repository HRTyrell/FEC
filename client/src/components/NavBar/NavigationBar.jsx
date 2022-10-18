import React, { useState, useEffect } from 'react';
import styled from "styled-components";

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

const H5 = styled.h5`
display: block;
background-color: white;
color: black;
text-align: center;
`;


const NavigationBar = () => {


  return (
    <Wrap>
      <Title>NavigationBar</Title>
      <H5>Sales | Deals | Promotions</H5>
    </Wrap>
  )
}

export default NavigationBar;