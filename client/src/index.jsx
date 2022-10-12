import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'


const App = () => {
  return (
    <div>
      <h1>FEC</h1>
      <ProductDetail />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));