import {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.jsx';
import {useRelatedItemsStore} from './RelatedItemsStore.jsx';

const Div = styled.div`
  display: table-row;
  border-spacing: 20px;
`;
const Title = styled.h5`
  position: sticky;
`;

const CurrentProduct = styled.div`
  display: table-cell;
  border-style: solid;
  border-spacing: 20px;
  padding: 45px;
`;

const YourOutfit = ({data}) => {
  function addToOutfit() {
    useRelatedItemsStore((state) => state.addToOutfit(product))
  };

  const product = {
    "id": 66643,
    "campus": "hr-rfc",
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69.00",
    "created_at": "2022-03-31T21:13:15.875Z",
    "updated_at": "2022-03-31T21:13:15.875Z",
    "features": [
        {
            "feature": "Lenses",
            "value": "Ultrasheen"
        },
        {
            "feature": "UV Protection",
            "value": null
        },
        {
            "feature": "Frames",
            "value": "LightCompose"
        }
    ]
}; //change me to actual currentProduct later
  return (
    <Div>
      <CurrentProduct>
        <img src="./plus.png" alt="add this Product to Outfit"
          width="20"
          height="20"
          onClick={addToOutfit}/>
      </CurrentProduct>
      {data.map((product, index) => {
        return <ProductCard product={product} key={index}/>
      })}
      {/* return product card */}
    </Div>
  )
};


export default YourOutfit;