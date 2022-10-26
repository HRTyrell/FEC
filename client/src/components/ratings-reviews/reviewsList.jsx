import {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import {TOKEN} from '../../../../MyConfig.js';
import {ReviewTile} from './reviewTile.jsx'

const ReviewsListDiv = styled.div`

  max-height: 100vh;
  overflow: auto;
  margin: 5px;
`
const ReviewsListOuterDiv = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 70%;
  border: solid;
  border-radius: 10px;
  height: fit-content;
  box-shadow: 8px 8px 16px black,
  -8px -8px 16px #ffffff;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
`

export const ReviewsList = function ({product_id, starBarFilters}) {

  const [reviews, setReviews] = useState(null)
  const [countToRender, setcountToRender] = useState(2);
  const [moreAvailable, setmoreAvailable] = useState(false);
  const [selectedSort, setSelectedSort] = useState('relevant');
  const [searchBarTerm, setsearchBarTerm] = useState('');

  useEffect(()=> {
    axios({
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/?page=${1}&count=${100000}&sort=${selectedSort}&product_id=${product_id}`,
      method: 'get',
      headers: {authorization: TOKEN}
      })
      .then((val)=> {
        let filteredReviews = val.data.results.filter((review)=> {
          return review.body.indexOf(searchBarTerm) > -1 && starBarFilters[review.rating];
        });
        setmoreAvailable(filteredReviews.length > countToRender ? true : false);
        setReviews(filteredReviews.slice(0, countToRender))

      })
      .catch((err)=> {
        alert(err);
      })
  }, [starBarFilters, countToRender, selectedSort, searchBarTerm]);

  const handleSearchBar = (e)=> {
    if (e.target.value.length >=3) {
      setsearchBarTerm(e.target.value);
    } else {
      setsearchBarTerm('')
    }
  }

  if (!reviews) {
    return null;
  }
  //console.log(reviews)
  return (
    <ReviewsListOuterDiv>
      <FlexDiv>
        <label>Sort on:
          <select value={selectedSort} onChange={(e)=>{setSelectedSort(e.target.value)}}>
            {['relevant', 'helpful', 'newest'].map((item,index)=>{
              return <option value={item} key={index}>{item}</option>
            })}
          </select>
        </label>
        <input type="text" placeholder="Search..." onChange={handleSearchBar} ></input>
      </FlexDiv>
      <ReviewsListDiv>
        <div>
          {reviews.map((review, index)=> {
            return <ReviewTile key={review.review_id} review={review}/>
          })}
        </div>

        {moreAvailable && <button onClick={()=>{setcountToRender(countToRender + 2)}}>More Reviews</button>}
      </ReviewsListDiv>
    </ReviewsListOuterDiv>
  )
}