import {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductStore from "../Provider/Zus_Provider.jsx";
import Star from '../../assets/Star.png';
import fullstar from '../../assets/fullstar.png';

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

const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0px;
  border-top: 2px solid grey;
`
const StyledFlexRowAdjustable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props=> props.alignment};
`

export const NewReviewForm = ({setmetaData, characteristics}) => {

  const [modalView, setModalView] = useState(false);
  const [rating, setRating] = useState(0);
  let starsArray = new Array(rating).fill(fullstar).concat(new Array(5-rating).fill(Star))

  const [recommended, setRecommended] = useState(null);

  const curProduct = ProductStore((state) => state.curProduct);

  if (!modalView) {
    return <button onClick={()=>setModalView(true)}>Submit New Review</button>
  } else {
    return (
      <StyledModal>
        <StyledForm>
          <StyledTitle fontSize="x-large">Write Your Review</StyledTitle>
          <StyledTitle fontSize="large" >About the {curProduct.name}</StyledTitle>

          <StyledFlexRow>Overall rating*:
            <div>
              {starsArray.map((item, index)=> {
                return <img src={item} key={index} onClick={()=>setRating(index+1)}></img>
              })}
            </div>
            <label>{{1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'}[rating]}</label>
          </StyledFlexRow>

          <StyledFlexRow>Do you recommend this product?*:
            <input type="radio" value="no" name="recommend" onChange={()=>setRecommended('no')} id="no"></input>
            <label for="no">no</label>
            <input type="radio" value="yes" name="recommend" onChange={()=>setRecommended('yes')} id="yes"></input>
            <label for="yes">yes</label>
          </StyledFlexRow>

          {Object.keys(characteristics).map((item, index)=> {
            return (
              <StyledFlexRow>

              </StyledFlexRow>
            )
          })}


        </StyledForm>
      </StyledModal>
    )
  }
}