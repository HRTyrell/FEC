import {useState, useEffect} from 'react';
import styled from "styled-components";
import {Starbar} from './starbar.jsx';
import axios from 'axios';
import {TOKEN} from '../../../../MyConfig.js';

const StyledContainerSpread = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledContainerStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1 1 1 1 1
`

const StyledBold = styled.header`
  font-weight: bold;
`
const StyledModal = styled.header`
  position: fixed;
  z-index: 100;
  padding: 200px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
  background-color: rgba(0,0,0,0.8); /* Fallback color */
`
const StyledOuterContainer = styled.div`
  padding: 10px 0px;
  margin-right: 5px;
  border-top: 2px solid grey;
`
const StyledImage = styled.img`
  margin: 2px 3px;
`

export const convertDate = (inp)=> {
  let formattedDate = new Date(inp)
  formattedDate=formattedDate.toDateString().split(' ');
  return `${formattedDate[1]} ${formattedDate[2]}, ${formattedDate[3]}`
}

//padding: 10px 5px 10px 0;
export const ReviewTile = ({review}) => {

  const [showMore, setShowMore] = useState(review.body.length > 250 ? true : false)
  const [helpful, setHelpful] = useState({voted:false, helpfulCount: review.helpfulness})

  const uploadHelpfulVote = ()=> {
    if (!helpful.voted) {
      axios({
        url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${review.review_id}/helpful`,
        method: 'put',
        headers: {authorization: TOKEN}
        })
        .then(()=> {
          setHelpful({voted:true, helpfulCount: review.helpfulness + 1})
        })
        .catch((err)=> {
          alert(err);
        })
    }
  }

  return (
    <StyledOuterContainer>
      <StyledContainerSpread>
        <Starbar rating={review.rating}/>
        <time>{review.reviewer_name + ', ' + convertDate(review.date)}</time>
      </StyledContainerSpread>
      <StyledBold>{review.summary}</StyledBold>

      {showMore ?
      <div>
        <p>{review.body.slice(0, 250) + '...'}</p>
        <a href="#/" onClick={()=>{setShowMore(false)}}>{'Show more'}</a>
      </div>
      :
      <div>{review.body}</div>
      }

      <StyledContainerStart>
        {review.photos.map((photo, index)=> {
          return <SizeAdjustableImage key={index} url={photo.url}/>
        })}
      </StyledContainerStart>
      {review.recommend && <div>✓ I recommend this product</div>}
      {review.response && <div>RESPONSE FROM SELLER: {review.response}</div>}
      <b>Was this review helpful? </b>
      <a href="#/" onClick={uploadHelpfulVote}>Yes ({helpful.helpfulCount})</a>
    </StyledOuterContainer>

  )
}

const SizeAdjustableImage = ({url}) => {
  const [modalView, setModalView] = useState(false)

  if (modalView) {
    return (
      <StyledModal>
        <img src={url} onClick={()=>{setModalView(false)}}></img>
      </StyledModal>
    )
  } else {
    return <StyledImage src={url} width="50px" height="50px" onClick={()=>{setModalView(true)}}></StyledImage>
  }
}