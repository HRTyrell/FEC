import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import NavigationBar from "./components/ProductDetail/NavigationBar.jsx";
import QAList from "./components/Q&A/QAList.jsx";



const App = () => {


  return (
    <div>
      <NavigationBar />
      <ProductDetail />
      <QAList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));