import {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import {TOKEN} from '/MyConfig.js';

const ReviewsListDiv = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: solid;
  border-radius: 10px;
  width: 70%;
`

export const ReviewsList = function ({product_id, starBarFilters, sort, searchBarTerm}) {

  const [reviews, setReviews] = useState(null)
  const [countToRender, setcountToRender] = useState(2);
  const [moreAvailable, setmoreAvailable] = useState(false);

  useEffect(()=> {
    axios({
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/?page=${1}&count=${100000}&sort=${sort}&product_id=${product_id}`,
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
  }, []);

  if (!reviews) {
    return null;
  }

  return (
    <ReviewsListDiv>
      <div></div>

      {moreAvailable && <button onClick={()=>{setcountToRender(countToRender + 2)}}>More Reviews</button>}
    </ReviewsListDiv>
  )
}

let exampleData = {
  "product": "66642",
  "page": 0,
  "count": 2,
  "results": [
      {
          "review_id": 1276391,
          "rating": 2,
          "summary": "Jan",
          "recommend": false,
          "response": null,
          "body": "People underestimate Michael. There are plenty of things that he is well above average at. Like ice skating. He is a very good ice skater.",
          "date": "2022-09-04T00:00:00.000Z",
          "reviewer_name": "Jan",
          "helpfulness": 2,
          "photos": []
      },
      {
          "review_id": 1276337,
          "rating": 2,
          "summary": "hello world",
          "recommend": true,
          "response": null,
          "body": "Hello world!",
          "date": "2022-09-02T00:00:00.000Z",
          "reviewer_name": "Adam",
          "helpfulness": 1,
          "photos": []
      }
  ]
}