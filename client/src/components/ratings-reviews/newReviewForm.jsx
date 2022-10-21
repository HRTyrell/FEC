import {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductStore from "../Provider/Zus_Provider.jsx";
import Star from '../../assets/Star.png';
import fullstar from '../../assets/fullstar.png';

// const StyledModal = styled.div`
//   position: fixed;

//   top: 0px;
//   left:  0px;
//   right:  0px;
//   bottom:  0px;
//   border: solid rgba(0, 0, 0, .7);
//   border-width: 10vh 30vw;
//   -webkit-background-clip: padding-box;
//   background-color: white;
// `

// const InnerStyleModal = styled.form`
//   border-radius: 10%;
//   border: solid;
//   background-color: white;
// `

const StyledModal = styled.div`
  position: fixed;
  top: 0px;
  left:  0px;
  right:  0px;
  bottom:  0px;
  background-color: rgba(0, 0, 0, .8);
`
const StyledForm = styled.form`
  position: fixed;
  top: 10vh;
  left:  15vw;
  right:  15vw;
  bottom:  10vh;
  border-radius: 20px;
  background-color: white;
`
const StyledTitle = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-weight: bold;
  font-size: ${props => props.fontSize}
`
export const NewReviewForm = ({setmetaData}) => {

  const [modalView, setModalView] = useState(false);
  const [rating, setRating] = useState(0);
  let starsArray = new Array(rating).fill(fullstar).concat(new Array(5-rating).fill(Star))

  const curProduct = ProductStore((state) => state.curProduct);

  if (!modalView) {
    return <button onClick={()=>setModalView(true)}>Submit New Review</button>
  } else {
    return (
      <StyledModal>
        <StyledForm>
          <StyledTitle fontSize="x-large">Write Your Review</StyledTitle>
          <StyledTitle fontSize="large" >About the {curProduct.name}</StyledTitle>
          <label>Overall rating*:
            <div>
              {starsArray.map((item, index)=> {
                return <img src={item} key={index} onClick={()=>setRating(index+1)}></img>
              })}
            </div>
          </label>
        </StyledForm>
      </StyledModal>
    )
  }
}