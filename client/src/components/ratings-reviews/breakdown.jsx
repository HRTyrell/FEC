import {useState, useEffect} from 'react';
import styled from "styled-components";
import Star from '../../assets/star.png';
import quarterStar from '../../assets/quarterStar.png';
import halfStar from '../../assets/halfStar.png';
import threefourthsStar from '../../assets/3fourthsStar.png';
import fullstar from '../../assets/fullstar.png';

const StyledProgressBar = styled.progress`
  accent-color: green;
`;
const StyledDiv = styled.div`
  display: flex;
`;

export const getAvg = function(ratings) {
  let averageRating = [];
  for (var key in ratings) {
    averageRating = averageRating.concat(new Array(Number(ratings[key])).fill(Number(key)));
  }
  averageRating = averageRating.reduce((accumulator, val)=>{return accumulator + val}, 0) / averageRating.length;
  return Number(averageRating.toFixed(1));
}

export const Breakdown = function ({metaData, starBarFilters, setstarBarFilters}) {
  let avg = getAvg(metaData.ratings);
  let totalRatings = Number(metaData.recommended.false) + Number(metaData.recommended.true);
  console.log(metaData);

  const onClickBar = (star)=> {
    let newStarBarFilters={};
    if (!starBarFilters.filtered) {
      for (var key in starBarFilters) {
        newStarBarFilters[key] = false;
      }
      newStarBarFilters.filtered = true;
      newStarBarFilters[star] = true;
    } else {
      for (var key in starBarFilters) {
        newStarBarFilters[key] = starBarFilters[key];
      }
      newStarBarFilters[star] = newStarBarFilters[star]? false : true;
      if (newStarBarFilters[1]===false && newStarBarFilters[2]===false && newStarBarFilters[3]===false && newStarBarFilters[4]===false && newStarBarFilters[5]===false) {
        for (var key in starBarFilters) {
          newStarBarFilters[key] = true;
        }
        newStarBarFilters.filtered = false;
      }
    }
    setstarBarFilters(newStarBarFilters);
  }

  return (
    <div>RATINGS & REVIEWS
      <StyledDiv className='flex-container'>
        <label>{avg}</label>
        <Starbar rating={avg}></Starbar>
      </StyledDiv>
      <label>{totalRatings} total reviews</label>
      <section> Rating Breakdown
        {Object.keys(metaData.ratings).reverse().map((item, index) => {
          return (
            <div className='Red_hoverable' key={index} onClick={()=> {onClickBar(item)}}>
              <label>{item + ' Stars'}</label><StyledProgressBar max={totalRatings} value={metaData.ratings[item]}></StyledProgressBar><label>{metaData.ratings[item]}</label>
            </div>
            )
        })}
      </section>
    </div>
  )
}

export const Starbar = function ({rating}) {

  rating = ((rating / .25).toFixed(0)) * .25;
  const ratingsArray = new Array(Math.floor(rating)).fill(fullstar);
  rating = rating - Math.floor(rating);

  if (rating === .75) {
    ratingsArray.push(threefourthsStar)
  } else if (rating === .5) {
    ratingsArray.push(halfStar)
  } else if (rating === .25) {
    ratingsArray.push(quarterStar)
  }
  while (ratingsArray.length < 5) {
    ratingsArray.push(Star)
  }

  return (
    <div>
      {ratingsArray.map((item, index)=> {
        return <img key={index} src={item}></img>
      })}
    </div>
  )
}