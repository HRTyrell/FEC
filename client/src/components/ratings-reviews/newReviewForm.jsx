import {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import ProductStore from "../Provider/Zus_Provider.jsx";
import Star from '../../assets/YellowStar/emptyStar.png';
import fullstar from '../../assets/YellowStar/yellowStar.png';
import CryptoJS from 'crypto-js'
import axios from 'axios';
import {CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME} from '/MyConfig.js';
import {TOKEN} from '/MyConfig.js';

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
  top: 3vh;
  left:  8vh;
  right:  8vh;
  bottom:  3vh;
  border-radius: 20px;
  background-color: white;
  overflow: auto;
`
const StyledTitle = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 1px;
  font-style: italic;
  font-size: ${props => props.fontSize};
`

const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  border-top: 2px solid grey;
`
const StyledFlexRowAdjustable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props=> props.justifyContent};
  padding: 1px;
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
const StyledBigInput = styled.input`
  height: 100%;
  font-size: larger;
`

const characteristicTable = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
}

const convertcharacteristicsTable = (table)=> {
  let tableModded = {};
  for (var key in table) {
    tableModded[table[key]['id']] = 0;
  }
  return tableModded
}

export const cloudinaryPostRequest = (arrayOfFiles, successPhotosCallback) => {
  if (arrayOfFiles.length > 0) {
    Promise.all(arrayOfFiles.map((file)=>{
      const formData = new FormData();
      let timeStamp=Date.now();
      let signature = CryptoJS.SHA1(`timestamp=${timeStamp}${CLOUDINARY_API_SECRET}`).toString(CryptoJS.enc.Hex);

      formData.append("file", file);
      formData.append("api_key", CLOUDINARY_API_KEY);
      formData.append("timestamp", timeStamp);
      formData.append("signature", signature);
      return axios({
      url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
        method: 'post',
        data: formData
      })
    }))
    .then((results)=>{return results.map((result)=>{return result.data.url})})
    .then((results)=>{successPhotosCallback(results)})
    .catch((err)=>alert(err))
  } else {
    successPhotosCallback([]);
  }
}

export const NewReviewForm = ({setmetaData, characteristics, product_id, product_name}) => {

  const [modalView, setModalView] = useState(false);
  const [rating, setRating] = useState(0);
  const [recommended, setRecommended] = useState(null);
  const [characteristicRatings, setCharacteristicRatings] = useState(convertcharacteristicsTable(characteristics));
  const reviewSummary = useRef('');
  const [reviewBody, setReviewBody] = useState('');
  const [userPhotos, setUserPhotos] = useState([]);
  const nickname = useRef('');
  const email = useRef('');

  let starsArray = new Array(rating).fill(fullstar).concat(new Array(5-rating).fill(Star))

  const handleUpdate = (char, newScore) => {
    setCharacteristicRatings ({...characteristicRatings, [char]: Number(newScore)})
  }

  const handlePhotoUpload = (e)=>{
    if (e.target.files.length>0) {
      setUserPhotos([...userPhotos, e.target.files[0]]);
    }
  }

  const verifyFormSuccessCallback = (photosArray) => {
    let dataz = {
      product_id: product_id,
      rating: rating,
      summary: reviewSummary.current.value,
      body: reviewBody,
      recommend: recommended,
      name: nickname.current.value,
      email: email.current.value,
      photos: photosArray,
      characteristics: characteristicRatings
    }
    axios({
      method: 'post',
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews`,
      headers: {authorization: TOKEN},
      data: dataz
    })
    .then((val)=> {
      setModalView(false)
    })
    .catch((err)=> {
      alert(err);
    })
  }

  const verifyForm = (e) => {
    e.preventDefault();
    let requiredButBlank = [];
    if (rating === 0) {
      requiredButBlank.push('Overall Rating')
    }
    if (recommended === null) {
      requiredButBlank.push('Do you recommend this product?')
    }
    Object.keys(characteristics).forEach((char)=> {
      let charID = characteristics[char].id
      let charSelectedScore = characteristicRatings[charID];
      if (charSelectedScore === 0) {
        requiredButBlank.push(char)
      }
    })

    if (reviewBody.length < 50) {
      requiredButBlank.push('Review body (less than 50 characters)')
    }
    if (!nickname.current.value) {
      requiredButBlank.push('What is your nickname')
    }

    if (!email.current.value || email.current.value.indexOf('@') < 0 || email.current.value.indexOf('.com') < 0) {
      requiredButBlank.push('Your email')
    }

    if (requiredButBlank.length > 0) {
      alert(`You must enter the following: ${requiredButBlank.join(', ')}`)
    } else {
      cloudinaryPostRequest(userPhotos, verifyFormSuccessCallback);
    }
  }

  if (!modalView) {
    return <button onClick={()=>setModalView(true)}>Submit New Review</button>
  } else {
    return (
      <StyledModal>
        <StyledForm onSubmit={verifyForm}>
          <StyledTitle fontSize="x-large">Write Your Review</StyledTitle>
          <StyledTitle fontSize="large" >About the {product_name}</StyledTitle>

          <StyledFlexRow>
            <StyledFlexItemHeader>Overall rating*:</StyledFlexItemHeader>
            <StyledPaddedDiv>
              {starsArray.map((item, index)=> {
                return <img width="25px" height="25px" src={item} key={index} onClick={()=>setRating(index+1)}></img>
              })}
            </StyledPaddedDiv>
            <label>{{1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'}[rating]}</label>
          </StyledFlexRow>

          <StyledFlexRow>
            <StyledFlexItemHeader>Do you recommend this product?*:</StyledFlexItemHeader>
            <StyledPaddedDiv>
              <input type="radio" value="false" name="recommend" onChange={()=>setRecommended(false)} id="false"></input>
              <label htmlFor="false">no</label>

              <input type="radio" value="true" name="recommend" onChange={()=>setRecommended(true)} id="true"></input>
              <label htmlFor="true">yes</label>
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
            <StyledFlexGrowingDiv>
              <textarea type="text" placeholder="Example: Best purchase ever!" ref={reviewSummary} maxLength="60" size="60" cols="60" rows="1"></textarea>
            </StyledFlexGrowingDiv>
          </StyledFlexRow>

          <StyledFlexRow>
            <StyledFlexItemHeader>Review body:</StyledFlexItemHeader>
            <StyledFlexGrowingDiv>
              <textarea type="text" placeholder="Why did you like the product or not" maxLength="1000" size="1000" cols="91" rows="11" onChange={(e)=> {setReviewBody(e.target.value)}}></textarea>

              <small style={{display:'block'}}>{reviewBody.length > 50? 'Minimum reached' : `Minimum required characters left: ${50-reviewBody.length}`}</small>
            </StyledFlexGrowingDiv>
          </StyledFlexRow>

          <StyledFlexRow>
            <StyledFlexItemHeader>Upload your photos:</StyledFlexItemHeader>
            <StyledPaddedDiv>
              {userPhotos.length < 5 && <input type="file" accept="image/*" onInput={handlePhotoUpload}></input>}
              {userPhotos.map((photo, index)=>{
                return <img src={URL.createObjectURL(photo)} key={index} width="35px" height="35px"></img>
              })}
            </StyledPaddedDiv>

          </StyledFlexRow>

          <StyledFlexRow>
            <StyledFlexItemHeader>What is your nickname*:</StyledFlexItemHeader>
            <StyledFlexGrowingDiv>
              <textarea type="text" ref={nickname} placeholder="Example: jackson11!" size="60" cols="60" rows="1"></textarea>
              <small style={{display:'block'}}>For privacy reasons, do not use your full name or email address</small>
            </StyledFlexGrowingDiv>

          </StyledFlexRow>

          <StyledFlexRow>
            <StyledFlexItemHeader>Your email*:</StyledFlexItemHeader>
            <StyledFlexGrowingDiv>
              <input type="text" ref={email} placeholder="Example: jackson11@email.com" size="60"></input>
              <small style={{display:'block'}}>For authentication reasons, you will not be emailed</small>
            </StyledFlexGrowingDiv>

          </StyledFlexRow>

          <StyledFlexRowAdjustable justifyContent={'center'}>
            <StyledBigInput type="submit" value="Submit"></StyledBigInput>
          </StyledFlexRowAdjustable>

        </StyledForm>
      </StyledModal>
    )
  }
}