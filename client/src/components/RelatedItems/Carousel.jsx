import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const CarouselStyled = styled.div`
  position: relative;
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
background: linear-gradient(to right, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 99%);
border: 0px;
z-index: 3;
right: 0;
height: 100%;
width: 100%;
max-width: 500px;
pointer-events: none;
`;

const Carousel = (props) => {
  const [overlay, setOverlay] = useState(true);
  const [showPrevious, setShowPrevious] = useState(false)
  const [showNext, setShowNext] = useState(true);


  const slide = (e, shift) => {
    e.target.parentNode.scrollLeft -= shift;
    let distanceToEndOfScroll = e.target.parentNode.scrollHeight - e.target.parentNode.scrollLeft
    if (distanceToEndOfScroll <= 100) {
      setOverlay(false);
    } else {
      setOverlay(true);
      setShowNext(true);
    }
    if (e.target.parentNode.scrollLeft > 0) {
      setShowPrevious(true);
    } else {
      setShowPrevious(false);
    }
    if (distanceToEndOfScroll <= 20) {
      setShowNext(false);
    } else {
      setShowNext(true);
    }
  }

  return (
    <div style={{ maxWidth: "500px",
                  position: "relative"}}>
    {overlay ? <FadedOverlay /> : null }
    <CarouselStyled aria-label="Product Carousel">
      {showPrevious ? <CarouselControlPrev data-testid="prevControl" onClick={(e)=> slide(e, 120)}>&#60;</CarouselControlPrev> : null }
      {showNext ? <CarouselControlNext data-testid="nextControl" onClick={(e)=> slide(e, -120)}>&#62;</CarouselControlNext> : null }
      {React.cloneElement(props.children, {data: props.data}, null)}
    </CarouselStyled>
    </div>
  )
}

export default Carousel;