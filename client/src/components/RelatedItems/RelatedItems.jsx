import {useState, useEffect} from 'react';
import getProducts from './parseHelpers.js';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';


const RelatedItems = () => {

  return (

    <div>
      <h1>RelatedItems</h1>
      <RelatedProducts />
      <YourOutfit />
    </div>
  )
}

export default RelatedItems;