import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const GalleryDiv = styled.div`
margin: 10px 0;
height: 400px;
width: 70%;
border: solid;
border-radius: 10px;
`

const Gallery = () => { //Product_Styles
  return (
    <GalleryDiv>
      <h1>Gallery</h1>
    </GalleryDiv>
  )
}

export default Gallery;