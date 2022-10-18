import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const CarouselStyled = styled.div`
  position: relative;
  max-width: 500px;
  margin-top: -30px;
  overflow: hidden;
`;

const CarouselControl = styled.button`
  position: sticky;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20%;
  border: none;
  font-size: 1.5rem;
  top: 55%;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.5);
  }`;


const CarouselControlPrev = styled(CarouselControl)`
  left: 0.5rem;

`;

const CarouselControlNext = styled(CarouselControl)`
  left: 29rem;
`;
const FadedOverlay = styled.div`
position: absolute;
background: linear-gradient(to right, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 90%);
border: 0px;
z-index: 3;
right: 10%;
height: 100%;
width: 100%;
pointer-events: none;
`;

const Carousel = (props) => {

  const slide = (e, shift) => {
    e.target.parentNode.scrollLeft -= shift;
  }

  return (
    <div>
    <h5>{props.title}</h5>
    <FadedOverlay />
    <CarouselStyled aria-label="Product Carousel">
      <CarouselControlPrev onClick={(e)=> slide(e, 120)}>&#8678;</CarouselControlPrev>
      <CarouselControlNext onClick={(e)=> slide(e, -120)}>&#8680;</CarouselControlNext>
      {React.cloneElement(props.children, {data: props.data}, null)}
    </CarouselStyled>
    </div>
  )
}

export default Carousel;