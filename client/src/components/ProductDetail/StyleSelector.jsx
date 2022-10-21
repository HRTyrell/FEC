import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const ImgS = styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
border: solid;
`
const ImgY = styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
border: solid;
border-color: red;
`

const DivS = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 10px;

justify-content: center;
`

//Completion of State for Styles
//TODO Completion of choice on Style
//TODO CSS of Selector
//TODO Passing Style state to parent

const StyleSelector = () => {

  const Styles = ProductStore((state) => state.curProductStyles);
  const curStyle = ProductStore((state) => state.curStyle);

  const setStyle = ProductStore((state) => state.setStyle);

  if (!Styles) {
    return null;
  }

  const handleClick = (e) => {
    setStyle(e.target.title);
  }

  console.log(curStyle)

  return (
    <DivS>
      {Styles.map((info) => {
        if (info.style_id === curStyle.style_id) {
          return(
            <ImgY title = {info.name} key={info.style_id} value={info.style_id} src={info.photos[0].thumbnail_url} height="30px" width="30px"/>
          )
        }
        return(
          <ImgS title = {info.name} key={info.style_id} value={info.style_id} src={info.photos[0].thumbnail_url} height="30px" width="30px" onClick = {(e) => handleClick(e)} />
        )
      })}
    </DivS>
  )
}

export default StyleSelector;