import {useState, useEffect} from 'react';
import styled from 'styled-components';
////////////////Styles//////////////////////////////////////
const CardStyled = styled.div`
display: table-cell;
border-style: solid;
border-spacing: 20px;
width: 100px;
height: 200px;
padding: 5px;
`;

const ProductImageStyled = styled.div`
position: relative;
width: 100px;
height: 133.3333
height:
`;

const ProductDescription = styled.div`
height: 66.6666px;
`;

const ImageStyled = styled.img`
position: relative;
display: block;
margin-left: auto;
margin-right: auto;
width: 100px;
height: 133.333px;
padding: 5px;
padding-top: 25px;
`;

const ButtonStyled = styled.img`
position: absolute;
top 10px;
right: 0px;
flex: none;
width: 30px;
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
          onMouseLeave={handleOnMouseLeave}/>
      </ProductImageStyled>
      <div >
        <Category>{product.category}</Category>
        <ProductTitle>{product.name}</ProductTitle>
        <Price>{product.default_price}</Price>
        <Review src={handleReview()} />
      </div>
    </CardStyled>
  )
}

export default ProductCard;