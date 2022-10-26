import {useState, useEffect, Fragment, useRef} from 'react';
import axios from 'axios';

import {TOKEN} from '../../../../MyConfig.js';
import {Breakdown} from './breakdown.jsx';
import {ReviewsList} from './reviewsList.jsx'
import styled from "styled-components";
import {NewReviewForm} from './newReviewForm.jsx';
import ProductStore from "../Provider/Zus_Provider.jsx";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: top;
  padding: 10px;
  width: 70%;
`
const RatingsReviews = ({curProduct}) => {

  // const {curProduct} = ProductStore();
  // const isMounted = useRef(false);

  const [starBarFilters, setstarBarFilters]  = useState({1:true, 2:true, 3:true, 4:true, 5:true, filtered:false});
  const [metaData, setmetaData]  = useState(null);

  useEffect(()=> {
    axios({
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta/?product_id=${curProduct.id}`,
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
    <Fragment>
      <h2 data-testid="h2TEST"> RATINGS & REVIEWS </h2>
      <StyledContainer>
        <Breakdown metaData={metaData} starBarFilters={starBarFilters} setstarBarFilters={setstarBarFilters}/>

        <ReviewsList product_id={curProduct.id} starBarFilters={starBarFilters}/>
      </StyledContainer>
      <NewReviewForm setmetaData={setmetaData} characteristics={metaData.characteristics} product_id={curProduct.id} product_name={curProduct.name}/>
    </Fragment>
  )
}

export default RatingsReviews;