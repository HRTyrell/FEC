import {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import styled from 'styled-components';

const Div = styled.div`
display: table-row;
border-spacing: 20px;
`;
const Title = styled.h5`

`;

const RelatedProducts = ({data}) => {

  return (
    <Div>
      {data.map((product) => {
        return <ProductCard product={product}/>
      })}
    </Div>
  )
};

export default RelatedProducts;