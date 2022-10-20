import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const ImgS = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
border: solid;
`

const DivS = styled.div`
display: flex;
flex-direction: row;
gap: 5px;
`

const StyleSelector = () => {

  const Styles = ProductStore((state) => state.curProductStyles)

  if (!Styles) {
    return null;
  }

  return (
    <DivS>
      {Styles.map((info) => {
        return(
          <>
            <ImgS title = {info.name} key={info.style_id} src={info.photos[0].thumbnail_url} height="30px" width="30px"/>
          </>
        )
      })}
    </DivS>
  )
}

export default StyleSelector;