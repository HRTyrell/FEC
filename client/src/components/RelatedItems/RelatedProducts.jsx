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
      {data.map((product, index) => {
        return <ProductCard product={product} key={index}/>
      })}
    </Div>
  )
};

export default RelatedProducts;