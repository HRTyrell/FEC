import {useState, useEffect} from 'react';
import axios from 'axios';
import {TOKEN} from '/MyConfig.js';
import {Breakdown} from './breakdown.jsx';
import {ReviewsList} from './reviewsList.jsx'
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: top;
  padding: 10px;
  width: 70%;
`

const ReviewsListDiv = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 70%;
  border: solid;
  border-radius: 10px;
  height: fit-content;
`

const RatingsReviews = () => {

  let product_id = 66642;
  const [starBarFilters, setstarBarFilters]  = useState({1:true, 2:true, 3:true, 4:true, 5:true, filtered:false});
  const [metaData, setmetaData]  = useState(null);
  const [sort, setSort]  = useState('Relevant');
  const [searchBarTerm, setsearchBarTerm] = useState('');

  useEffect(()=> {
    axios({
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta/?product_id=${product_id}`,
      method: 'get',
      headers: {authorization: TOKEN}
      })
      .then((val)=> {
        setmetaData(val.data)
      })
      .catch((err)=> {
        alert(err);
      })
  }, [sort]);

  if (!metaData) {
    return null;
  }

  return (
    <StyledContainer>
      <Breakdown metaData={metaData} starBarFilters={starBarFilters} setstarBarFilters={setstarBarFilters}/>

      <ReviewsListDiv>
        <label >Sort on:
          <select value={sort} onChange={(e)=>{setSort(e.target.value)}}>
            {['Relevant', 'Helpful', 'Newest'].map((item,index)=>{
              return <option value={item}>{item}</option>
            })}

          </select>
        </label>
        <ReviewsList product_id={product_id} starBarFilters={starBarFilters} sort={sort} searchBarTerm={searchBarTerm}/>
      </ReviewsListDiv>
    </StyledContainer>
  )
}

export default RatingsReviews;