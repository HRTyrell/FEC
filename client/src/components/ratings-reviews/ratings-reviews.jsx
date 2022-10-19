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
const RatingsReviews = () => {

  let product_id = 66642;
  const [starBarFilters, setstarBarFilters]  = useState({1:true, 2:true, 3:true, 4:true, 5:true, filtered:false});
  const [metaData, setmetaData]  = useState(null);
  const [sort, setSort]  = useState('relevant');
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
  }, []);

  if (!metaData) {
    return null;
  }

  return (
    <StyledContainer>
      <Breakdown metaData={metaData} starBarFilters={starBarFilters} setstarBarFilters={setstarBarFilters}/>
      <ReviewsList/>
    </StyledContainer>
  )
}

export default RatingsReviews;