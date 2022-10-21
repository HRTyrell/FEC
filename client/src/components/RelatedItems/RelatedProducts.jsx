import {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: row;
border-spacing: 20px;
padding: 0;
`;
const Title = styled.h5`

`;

const RelatedProducts = ({data}) => {

  return (
    <Div>
      {data.map((product, index) => {
        return <ProductCard product={product} key={product.data.id}/>
      })}
    </Div>
  )
};

export default RelatedProducts;