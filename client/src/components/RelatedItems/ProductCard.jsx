import {useState, useEffect} from 'react';
import styled from 'styled-components';
////////////////Styles//////////////////////////////////////
const CardStyled = styled.div`
display: table-cell;
border-style: solid;
border-spacing: 20px;
width: 100px;
height: 200px;
padding: 0;
`;


// const ProductImageOuterDiv = styled.div`
// width: 100px;
// height: 66.6666px;
// `;

const ProductImageStyled = styled.div`
display: flex;
align-items: center;
margin: auto;
position: relative;
width: 100px;
height: 133.3333px;

`;


const ImageStyled = styled.img`
display: flex;
align-items: center
position: relative;
display: block;
margin-left: auto;
margin-right: auto;
width: 100px;
height: auto;
padding: 5px;
padding-top: 25px;
`;

const ButtonStyled = styled.img`
position: absolute;
top 10px;
right: 0px;
flex: none;
width: 15px;
`;

const OuterDescriptionDiv = styled.div`
width: 105px;
height: 72.35px;
padding: 5px;
background-color: rgba(211, 211, 211, 0.5);
`;
const Category = styled.p`
margin-top: 0;
margin-bottom: 0;
`;

const ProductTitle = styled.h5`
  margin: 5px;
  width: 100px;
`;

const Price = styled.p`
margin-top: 0;
margin-bottom: 0;
`;

const Review = styled.img`
  line-height: 0;
  margin: 0;
  padding: 0;
  height: 0;
`;

///////////////React Component///////////////////////////
const ProductCard = ({product}) => {

  const handleOnMouseEnter = () => {

  }

  const handleOnMouseLeave = () => {

  }

  const handleReview = () => {
    return '';
  }


  const [image, setImage] = useState('./testImage.png');

  return (
    <CardStyled>
      <ProductImageStyled >
        <ImageStyled src={image} alt="Image of RelatedProduct" />
        <ButtonStyled src="./star-empty-icon.png"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          aria-label="Comparison Button"/>
      </ProductImageStyled>
      <OuterDescriptionDiv>
        <Category>{product.category}</Category>
        <ProductTitle>{product.name}</ProductTitle>
        <Price>{product.default_price}</Price>
        <Review src={handleReview()} />
      </OuterDescriptionDiv>
    </CardStyled>
  )
}

export default ProductCard;