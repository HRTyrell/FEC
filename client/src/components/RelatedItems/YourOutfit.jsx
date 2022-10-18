import {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.jsx';

const Div = styled.div`
display: table-row;
border-spacing: 20px;
`;
const Title = styled.h5`
  position: sticky;
`;

const YourOutfit = ({data}) => {

  return (
    <Div>
      {data.map((product) => {
        return <ProductCard product={product}/>
      })}
      {/* return product card */}
    </Div>
  )
};


export default YourOutfit;