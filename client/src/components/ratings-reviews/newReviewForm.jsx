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
  font-size: ${props => props.fontSize};
`

const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px;
  border-top: 2px solid grey;
`
const StyledFlexRowAdjustable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props=> props.justifyContent};
  padding: 3px;
`

const StyledFlexItemHeader = styled.label`
  width: 20%;
  height: 100%;
  padding-left: 5%;
  text-align: left;
  border-right: 2px solid LightGrey;
`
const StyledFlexGrowingDiv = styled.div`
  flex-grow: 2;
  padding-right: 5%;
  padding-left: 5%;
`
const StyledPaddedDiv = styled.div`
  padding-left: 5%;
`

const convertcharacteristicsTable = (table)=> {
  let tableModded = {};
  for (var key in table) {
    tableModded[table[key]['id']] = 0;
  }
  return tableModded
}
export const NewReviewForm = ({setmetaData, characteristics}) => {

  const [modalView, setModalView] = useState(false);
  const [rating, setRating] = useState(0);
  const [recommended, setRecommended] = useState(null);
  const [characteristicRatings, setCharacteristicRatings] = useState(convertcharacteristicsTable(characteristics));
  const [reviewSummary, setReviewSummary] = useState('');

  const curProduct = ProductStore((state) => state.curProduct);

  let starsArray = new Array(rating).fill(fullstar).concat(new Array(5-rating).fill(Star))

  const characteristicTable = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }

  const handleUpdate = (char, newScore) => {
    setCharacteristicRatings ({...characteristicRatings, [char]: newScore})
  }

  if (!modalView) {
    return <button onClick={()=>setModalView(true)}>Submit New Review</button>
  } else {
    return (
      <StyledModal>
        <StyledForm>
          <StyledTitle fontSize="x-large">Write Your Review</StyledTitle>
          <StyledTitle fontSize="large" >About the {curProduct.name}</StyledTitle>

          <StyledFlexRow>
            <StyledFlexItemHeader>Overall rating*:</StyledFlexItemHeader>
            <StyledPaddedDiv>
              {starsArray.map((item, index)=> {
                return <img src={item} key={index} onClick={()=>setRating(index+1)}></img>
              })}
            </StyledPaddedDiv>
            <label>{{1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'}[rating]}</label>
          </StyledFlexRow>

          <StyledFlexRow>
            <StyledFlexItemHeader>Do you recommend this product?*:</StyledFlexItemHeader>
            <StyledPaddedDiv>
              <input type="radio" value="no" name="recommend" onChange={()=>setRecommended('no')} id="no"></input>
              <label for="no">no</label>
              <input type="radio" value="yes" name="recommend" onChange={()=>setRecommended('yes')} id="yes"></input>
              <label for="yes">yes</label>
            </StyledPaddedDiv>
          </StyledFlexRow>

          {Object.keys(characteristics).map((char, index)=> {
            let charID = characteristics[char].id
            let charSelectedScore = characteristicRatings[charID];

            return (
              <StyledFlexRow key={index}>
                <StyledFlexItemHeader>{char + ' *:'}</StyledFlexItemHeader>
                <StyledFlexGrowingDiv>
                 <StyledFlexRowAdjustable justifyContent="center;">
                 {charSelectedScore === 0 ? 'none selected' : characteristicTable[char][charSelectedScore-1]}
                 </StyledFlexRowAdjustable>

                 <StyledFlexRowAdjustable justifyContent="space-between">
                  {[1, 2, 3, 4, 5].map((score, index)=> {
                    return <input type="radio" key={char + score} value={score} name={char} onChange={(e)=>handleUpdate(charID, e.target.value)}></input>
                    })
                  }
                  </StyledFlexRowAdjustable>

                  <StyledFlexRowAdjustable justifyContent="space-between">
                  <small>{characteristicTable[char][0]}</small>
                  <small>{characteristicTable[char][4]}</small>
                  </StyledFlexRowAdjustable>

                </StyledFlexGrowingDiv>
              </StyledFlexRow>
            )
          })}

          <StyledFlexRow>
            <StyledFlexItemHeader>Review summary:</StyledFlexItemHeader>
            <StyledPaddedDiv>
              <input type="text" placeholder="Example: Best purchase ever!" value={reviewSummary} onChange={(e)=>{if (e.target.value.length <=60) {setReviewSummary(e.target.value)}}}></input>
            </StyledPaddedDiv>
          </StyledFlexRow>

        </StyledForm>
      </StyledModal>
    )
  }
}