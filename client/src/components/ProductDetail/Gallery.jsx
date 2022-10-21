import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const GalleryDiv = styled.div`
margin: 10px 0;
height: 800px;
width: 70%;
/* border: solid; */
/* border-radius: 10px; */
`

const C2Div = styled.div`
height: 800px;
width: 100%;
display: flex;
flex-direction: column;
gap: 5px;
/* border: solid; */
/* border-radius: 10px; */
overflow-y: auto;
scroll-snap-type: y mandatory;
::-webkit-scrollbar {
    width: 0px;
  }
`

const C2img = styled.img`
max-height: 800px;
/* width: 450px; */
object-fit: contain;
scroll-snap-align: center;
`

const Gallery = () => {

  const cStyle = ProductStore((state) => state.curStyle);

  if (!cStyle) {
    return null;
  }

  return (
    <GalleryDiv>
      <C2Div>
        {cStyle.photos.map((img, index) => {
          return(
              <C2img title = {img.name} key={index} src={img.url}/>
          )
        })}
      </C2Div>
    </GalleryDiv>
  )
}

export default Gallery;