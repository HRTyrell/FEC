import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getProductStyles } from './parseHelpers.js';
import SmallStarBar from './SmallStarbar.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import yellowStar from '../../assets/yellow-star.png';
import ProductStore from '../Provider/Zus_Provider.jsx';

////////////////Styles//////////////////////////////////////
const CardStyled = styled.div`
display: flex;
flex-direction: column;
border-style: solid;
border-spacing: 20px;
margin: 2px;
padding: 0;
width: 8em;
height: 18em;
`;


const ProductImageStyled = styled.div`
display: flex;
flex-direction: Column;
align-items: center;
justify-content: center;
flex-grow: 3;
margin: auto;
position: relative;
width: auto;

`;


const ImageStyled = styled.img`
display: flex;
align-items: center
position: relative;
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



///////////////React Component///////////////////////////
const ProductCard = ({product}) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const {curProduct} = ProductStore();
  console.log(curProduct);

  const handleOnMouseEnter = () => {
    setTimeout(setIsOpen, 200, true);
  }

  const handleOnMouseLeave = () => {
    setTimeout(setIsOpen, 200, false);
  }


  const handleCardClick = (e) => {
    console.log('Clicked on ', product);
    console.log(product.data);
  }

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
    <CardStyled onClick={handleCardClick}>
      <ComparisonModal modalIsOpen={modalIsOpen} currentProduct={curProduct} comparisonProduct={product.data}/>
      <ProductImageStyled >
        <ImageStyled src={defaultImage} alt="Image of RelatedProduct" aria-label="Product Image"/>
        <ButtonStyled src={yellowStar}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          aria-label="Comparison Button"/>
        <SmallStarBar rating={rating}/>
      </ProductImageStyled>
      <OuterDescriptionDiv>
        <Category>{product.data.category}</Category>
        <ProductTitle>{product.data.name}</ProductTitle>
        <Price>${product.data.default_price}</Price>
      </OuterDescriptionDiv>
    </CardStyled>
  )
}

export default ProductCard;