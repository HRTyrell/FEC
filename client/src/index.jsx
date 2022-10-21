import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

import Overview from './components/ProductDetail/Overview.jsx';
import NavigationBar from "./components/NavBar/NavigationBar.jsx";
import QA from "./components/Q&A/QA.jsx";
import RelatedItems from './components/RelatedItems/RelatedItems.jsx';
import RatingsReviews from './components/ratings-reviews/ratings-reviews.jsx';

const Sdiv = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
justify-content: center;
align-items: center;
`

const App = () => {

  return (
    <div>
      <NavigationBar />
      <Sdiv>
        <Overview />
        <RelatedItems />
        {/* <QA /> */}
        <RatingsReviews />
      </Sdiv>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));