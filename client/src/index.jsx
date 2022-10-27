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
import {BGBubbles} from './components/Shapes/Shapes.jsx';

const Sdiv = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
justify-content: center;
align-items: center;
background: white;
`

const FullDiv = styled.div`
height: 100%;
width: 100%;
`



const App = () => {

  const Clicks = ClickStore((state) => state.AddDomElement);
  const Targets = ClickStore((state) => state.DomElements);


  useEffect(() => {
    window.onclick = (e) => {
      console.log(e)
      Clicks(e.target.outerHTML);
    }
  }, [])

  //RatingsReviews
  //QandA
  //RelatedItems
  //Navbar
  //ProductInfo


  // axios({
  //   url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/interactions`,
  //   method: 'post',
  //   headers: {authorization: TOKEN},
  //   data: {element:'<h2></h2>', widget: 'ratingsReviews',time: new Date().toJSON()}
  //   })
  // .then(val=>console.log('wokr'))
  // .catch(err=>console.log(err));

  //Uncomment to see Clicks
  // console.log(Targets);

  return (
    <FullDiv>
      {/* <BGBubbles/> */}
      <GlobalFonts/>
      <NavigationBar />
      <Sdiv>
        <Overview />
        <RelatedItems />
        <QA />
        <RatingsReviews />
      </Sdiv>
    </FullDiv>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));