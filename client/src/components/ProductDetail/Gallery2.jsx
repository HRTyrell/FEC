import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const GalleryDiv = styled.div`
display: flex;
justify-content: center;
`
const Thumbnails = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`
const Timg = styled.img`
width: 45px;
height: 60px;
object-fit: contain;
cursor: pointer;
`

const Scrollbar = styled.div`
width: 1px;
height: 720px;
background: #ccc;
display: block;
margin: 0 0 0 8px;
`
const Thumb = styled.div`
width: 1px;
position: absolute;
height: 0;
background: #000;
`

const Slides = styled.div`
margin: 0 16px;
display: grid;
grid-auto-flow: row;
gap: 1rem;
width: calc(540px + 1rem);
padding: 0 0.25rem;
height: 720px;
overflow-y: auto;
overscroll-behavior-y: contain;
scroll-snap-type: y mandatory;
scrollbar-width: none;
::-webkit-scrollbar {
display: none;
}
`
const IDiv = styled.div`
scroll-snap-align: start;
`

const C2img = styled.img`
width: 540px;
object-fit: contain;
`



const Gallery2 = () => {

  const cStyle = ProductStore((state) => state.curStyle);

  if (!cStyle) {
    return null;
  }


  console.log("🚀 ~ file: Gallery2.jsx ~ line 65 ~ Gallery2 ~ cStyle", cStyle)

  return (
    <GalleryDiv>
      <Thumbnails>
      {cStyle.photos.map((img, index) => {
          return(
            <Timg key={index} src={img.url}/>
          )
      })}
      </Thumbnails>
      <Scrollbar>
        <Thumb/>
      </Scrollbar>
      <Slides>
        {cStyle.photos.map((img, index) => {
          return(
            <IDiv key={index}>
              <C2img src={img.url}/>
            </IDiv>
          )
        })}
      </Slides>
    </GalleryDiv>
  )
}

export default Gallery2;

// const slideGallery = document.querySelector('.slides');
// const slides = slideGallery.querySelectorAll('div');
// const scrollbarThumb = document.querySelector('.thumb');
// const slideCount = slides.length;
// const slideHeight = 720;
// const marginTop = 16;

// const scrollThumb = () => {
//   const index = Math.floor(slideGallery.scrollTop / slideHeight);
//   scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
// };

// const scrollToElement = el => {
//   const index = parseInt(el.dataset.id, 10);
//   slideGallery.scrollTo(0, index * slideHeight + marginTop);
// };

// document.querySelector('.thumbnails').innerHTML += [...slides]
//   .map(
//     (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
//   )
//   .join('');

// document.querySelectorAll('.thumbnails img').forEach(el => {
//   el.addEventListener('click', () => scrollToElement(el));
// });

// slideGallery.addEventListener('scroll', e => scrollThumb());

// scrollThumb();