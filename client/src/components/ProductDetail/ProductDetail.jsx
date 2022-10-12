import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import NavigationBar from "./NavigationBar.jsx";
import ProductInformation from "./ProductInformation.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";



const ProductDetail = () => {
  return (
    <div>
      <NavigationBar />
      <ProductInformation />
      <StyleSelector />
      <AddToCart />
    </div>
  )
}

export default ProductDetail;