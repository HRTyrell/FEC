import {useState, useEffect} from 'react';
import styled from "styled-components";
import {Starbar} from './starbar.jsx'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1 1 1 1 1
`
const StyledBold = styled.header`
  font-weight: bold;
`

export const ReviewTile = ({review}) => {

  const [showMore, setShowMore] = useState(review.body.length > 250 ? true : false)

  const convertDate = (inp)=> {
    let formattedDate = new Date(inp)
    formattedDate=formattedDate.toDateString().split(' ');
    return `${formattedDate[1]} ${formattedDate[2]}, ${formattedDate[3]}`
  }

  return (
    <div>
      <StyledContainer>
        <Starbar rating={review.rating}/>
        <time>{convertDate(review.date)}</time>
      </StyledContainer>
      <StyledBold>{review.summary}</StyledBold>

      {showMore ?
      <div>
        <p>{review.body.slice(0, 250) + '...'}</p>
        <a href="#/" onClick={()=>{setShowMore(false)}}>{'Show more'}</a>
      </div>
      :
      <div>{review.body}</div>
      }

      <StyledContainer>
        {review.photos.map((photo, index)=> {
          return <img key={index} src={photo.url} width="80px" height="80px"></img>
        })}

      </StyledContainer>
    </div>

  )
}