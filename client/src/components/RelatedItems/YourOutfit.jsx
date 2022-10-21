import {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.jsx';
import {useRelatedItemsStore} from './RelatedItemsStore.jsx';

const Div = styled.div`
  display: flex;
  justify-content: center;
  border-spacing: 20px;
  height: 15em;
  border-style: solid;
  border-spacing: 20px;
  padding: 0;
  width: 8em;
`;
const Title = styled.h5`
  position: sticky;
`;

const CurrentProduct = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`;
const Image = styled.img`
  display: flex;
  align-self: center;
  width: 2em;
  height: 2em;
  margin: auto;
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
        <Image src="./plus.png" alt="add this Product to Outfit"
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