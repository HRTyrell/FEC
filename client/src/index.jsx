import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styled from "styled-components";
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import NavigationBar from "./components/ProductDetail/NavigationBar.jsx";
import RelatedItems from './components/RelatedItems/RelatedItems.jsx';
import Breakdown from './components/ratings-reviews/breakdown.jsx';

const App = () => {


  return (
    <div>
      <h1>FEC</h1>

      <NavigationBar />
      <ProductDetail />
      <RelatedItems />
      <Breakdown />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));