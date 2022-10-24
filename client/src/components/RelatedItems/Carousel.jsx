import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useRelatedItemsStore} from './RelatedItemsStore.jsx';

const CarouselStyled = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  padding: 1em;
  margin: 1em;
  overflow: hidden;
`;

const CarouselControl = styled.button`
  position: sticky;
  display: flex;
  align-self: center;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20%;
  border: none;
  font-size: 1.5rem;
  top: 50%;
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
  left: 95%;
`;
// const FadedOverlay = styled.div`
// position: absolute;
// background: linear-gradient(to right, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 99%);
// border: 0px;
// z-index: 3;
// height: 100%;
// width: 100%;

// pointer-events: none;
// `;

const MDiv = styled.div`
  height: 100%;
  max-width: 52em;
`;

const Carousel = (props) => {

  const { relatedItemsList, outfitList} = useRelatedItemsStore();

  const ref = useRef(null);
  const [overlay, setOverlay] = useState(true);
  const [showPrevious, setShowPrevious] = useState(false)
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    if(ref.current.clientWidth > ref.current.parentElement.clientWidth) {
      setShowNext(true);
    }
    console.log(props.children);
    if (props.children.type.name === 'YourOutfit' && Object.keys(outfitList).length === 0 ) {
      setShowNext(false);
    }
  }, [outfitList, relatedItemsList])

  const slide = (e, shift) => {
    e.target.parentNode.scrollLeft -= shift;
    let distanceToEndOfScroll = e.target.parentNode.scrollHeight - e.target.parentNode.scrollLeft
    if (e.target.parentNode.scrollLeft > 0) {
      setShowPrevious(true);
    } else {
      setShowPrevious(false);
    }
    if (e.target.parentNode.scrollLeft > 0) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }

  }

  return (
    <MDiv ref={ref}>
    {/* {overlay ? <FadedOverlay /> : null } */}
    <CarouselStyled aria-label="Product Carousel">
      {showPrevious ? <CarouselControlPrev data-testid="prevControl" onClick={(e)=> slide(e, 120)}>&#60;</CarouselControlPrev> : null }
      {showNext ? <CarouselControlNext data-testid="nextControl" onClick={(e)=> slide(e, -120)}>&#62;</CarouselControlNext> : null }
      {React.cloneElement(props.children, {data: props.data}, null)}
    </CarouselStyled>
    </MDiv>
  )
}

export default Carousel;