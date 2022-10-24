import {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.jsx';
import {useRelatedItemsStore} from './RelatedItemsStore.jsx';
import plus from '../../assets/plus.png';
import ProductStore from '../Provider/Zus_Provider.jsx';
import {getProduct} from './parseHelpers.js';

const Div = styled.div`
display: flex;
flex-direction: row;
align-items: left;
// border-spacing: 20px;
padding: 0;
`;

const CurrentProduct = styled.div`
  display: flex;
  justify-content: center;
  height: 18em;
  border-style: solid;
  //border-spacing: 20px;
  margin: 2px;
  padding: 0;
  width: 8em;
  align-items: center;
  align-self: center;
`;
const Image = styled.img`
  display: flex;
  align-self: center;
  width: 2em;
  height: 2em;
  margin: auto;
`;

const YourOutfit = ({data}) => {

  const setOutfit = useRelatedItemsStore((state) => state.setOutfit)
  const outfitList = useRelatedItemsStore.getState().outfitList;

  const {curProduct} = ProductStore();

  const addToOutfitHandler = (e) => {
    e.preventDefault();
    getProduct(curProduct.id).then(product => {
      outfitList[product.data.id] = product;
      setOutfit(outfitList);
    })

  }
  const outfitArray = Object.values(outfitList);


  return (
    <Div>
      <CurrentProduct onClick={addToOutfitHandler} >
        <Image src={plus} alt="add this Product to Outfit"/>
      </CurrentProduct>
      {outfitArray.map((product, index) => {
        return <ProductCard product={product} key={product.data.id} isStar={false}/>
      })}
    </Div>
  )
};


export default YourOutfit;