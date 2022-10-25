import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

import GlobalFonts from './fonts/fonts.js';
import Overview from './components/ProductDetail/Overview.jsx';
import NavigationBar from "./components/NavBar/NavigationBar.jsx";
import QA from "./components/Q&A/QA.jsx";
import RelatedItems from './components/RelatedItems/RelatedItems.jsx';
import RatingsReviews from './components/ratings-reviews/ratings-reviews.jsx';
import ClickStore from './components/Provider/Zus_ClickStore.jsx';

const Sdiv = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
justify-content: center;
align-items: center;
background: rgb(250,76,255);
background: linear-gradient(129deg, rgba(250,76,255,1) 0%, rgba(113,0,255,1) 100%);
`

const App = () => {

  const Clicks = ClickStore((state) => state.AddDomElement);
  const Targets = ClickStore((state) => state.DomElements);


  useEffect(() => {
    window.onclick = (e) => {
      Clicks(e.target.outerHTML);
    }
  }, [])

  //Uncomment to see Clicks
  // console.log(Targets);

  return (
    <div>
      <GlobalFonts/>
      <NavigationBar />
      <Sdiv>
        <Overview />
        <RelatedItems />
        <QA />
        <RatingsReviews />
      </Sdiv>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));