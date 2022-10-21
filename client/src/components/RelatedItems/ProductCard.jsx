import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getProductStyles } from './parseHelpers.js';
import SmallStarBar from './SmallStarbar.jsx';
////////////////Styles//////////////////////////////////////
const CardStyled = styled.div`
display: flex;
flex-direction: column;
border-style: solid;
border-spacing: 20px;
margin: 2px;
padding: 0;
width: 8em;
height: 100%;
`;

// const ProductImageOuterDiv = styled.div`
// width: 100px;
// height: 66.6666px;
// `;

const ProductImageStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-grow: 3;
margin: auto;
position: relative;
width: auto;
//height: 80%;

`;


const ImageStyled = styled.img`
display: flex;
align-items: center
position: relative;
// display: block;
// margin-left: auto;
// margin-right: auto;
width: 90%;
height: auto;
padding: 2%;
`;

const ButtonStyled = styled.img`
position: absolute;
top 10px;
right: 10px;
flex: none;
width: 1.5em;
`;

const OuterDescriptionDiv = styled.div`
display: flex;
flex-direction: column;
//flex-grow: 3;
justify-content: center;
align-items: center;
width: 100%
height: 5em;
bottom: 1;
padding: 0.5em 0 0.5em 0;
background-color: rgba(211, 211, 211, 0.5);
`;
const Category = styled.p`
  margin-top: 0;
  margin-bottom: 0.7em;
  font-size: 0.7em;
`;

const ProductTitle = styled.h5`
  text-align: center;
  margin: 0 0 0 0;
  width: 100%;
`;

const Price = styled.p`
margin: 0.1em 0, 0.1em 0;
font-size: 0.9em;
`;

// const Review = styled(Starbar)`
//   display: flex;
//   flex-shrink: 1;
// `;


///////////////React Component///////////////////////////
const ProductCard = ({product}) => {

  const handleOnMouseEnter = () => {

  }

  const handleOnMouseLeave = () => {

  }

  const handleReview = () => {
    return '';
  }
// const [defaultImage, setDefaultImage] = useState('');

useEffect (() => {
  getProductStyles(product.data.id)
  .then(product => {
    return product.data.results[0].photos[0].thumbnail_url
  }).then(imageUrl => {
    setDefaultImage(imageUrl);
  })
}, [])
  // const getProductDefaultImage = () => {
  //   return getProductStyles(product.data.id)
  //   .then(product => {
  //     return product.data.results[0].photos[0].thumbnail_url
  //   })
  // }
  const defaultImage = product.styles.data.results[0].photos[0].thumbnail_url;

  const averageRating = () => {
    const reviewObject = product.reviews.data.ratings;
    let sumTotal = 0;
    let sumReviewers = 0;
    for(let key in reviewObject) {
      sumTotal += key * reviewObject[key];
      sumReviewers += Number(reviewObject[key]);
    }
    return sumTotal/sumReviewers;
  };
  const rating = averageRating();
  // const [image, setImage] = useState('./testImage.png');
  return (
    <CardStyled>
      <ProductImageStyled >
        <ImageStyled src={defaultImage} alt="Image of RelatedProduct" aria-label="Product Image"/>
        <ButtonStyled src="./yellow-star.png"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          aria-label="Comparison Button"/>
      </ProductImageStyled>
      <OuterDescriptionDiv>
        <Category>{product.data.category}</Category>
        <ProductTitle>{product.data.name}</ProductTitle>
        <Price>${product.data.default_price}</Price>
        <SmallStarBar rating={rating}/>
      </OuterDescriptionDiv>
    </CardStyled>
  )
}

export default ProductCard;