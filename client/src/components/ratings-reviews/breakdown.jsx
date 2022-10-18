import {useState, useEffect} from 'react';
<<<<<<< HEAD
import styled from "styled-components";
=======
>>>>>>> main
import Star from '../../assets/Star.png';
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

const StyledOuterDiv = styled.div`
  width: 33%;
`;

const StyledCharacteristicBar = styled.div`
  border-style: solid;
  background-color: LightGray;
`;

const StyledIcon = styled.i`
  position: relative;
  left: ${props=> props.position};
`;

const StyledHoverable = styled.div`
  :hover {
    background: aliceblue;
  }
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
  //console.log(metaData);

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

  const onClickRemoveAllFilters = () => {
    let newStarBarFilters={};
    for (let i = 1; i <= 5; i ++) {
      newStarBarFilters[i] = true;
    }
    newStarBarFilters.filtered = false;
    setstarBarFilters(newStarBarFilters);
  }

  let getfilterMessage = ()=> {
    let filterMessage = [];
    if (starBarFilters.filtered) {
      for (let i = 1; i <= 5; i ++) {
        if (starBarFilters[i]) {
          filterMessage.push(i);
        }
      }
      if (filterMessage.length > 1) {
        filterMessage = filterMessage.slice(0, filterMessage.length - 1).join(', ') + ' and ' + filterMessage.slice(filterMessage.length - 1);
      } else {
        filterMessage = filterMessage[0]
      }
      filterMessage = `Filtered for ${filterMessage} star reviews`
    }
    return filterMessage.length>0? filterMessage : '';
  }

  return (
    <StyledOuterDiv>RATINGS & REVIEWS
      <StyledDiv className='flex-container'>
        <label>{avg}</label>
        <Starbar rating={avg}></Starbar>
      </StyledDiv>
      <label>{totalRatings} total reviews</label>
      <header> Rating Breakdown</header>
      {starBarFilters.filtered?
        <div>
          <header>{getfilterMessage()}</header>
          <button onClick={onClickRemoveAllFilters}>Remove All Filters</button>
        </div> :
        <label></label>
      }
        {Object.keys(metaData.ratings).reverse().map((item, index) => {
          return (
            <StyledHoverable key={index} onClick={()=> {onClickBar(item)}}>
              <label>{item + ' Stars'}</label><StyledProgressBar max={totalRatings} value={metaData.ratings[item]}></StyledProgressBar><label>{metaData.ratings[item]}</label>
            </StyledHoverable>
            )
        })}
      <label>{`${(Number(metaData.recommended.true) / (Number(metaData.recommended.true) + Number(metaData.recommended.false))).toFixed(2) * 100}% of reviews recommend this product`}</label>

      {Object.keys(metaData.characteristics).map((characteristic, index)=> {
        return <ProductBreakdownFactor key={index} characteristic={characteristic} data={metaData.characteristics[characteristic]}></ProductBreakdownFactor>
      })}

    </StyledOuterDiv>
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

export const ProductBreakdownFactor = ({characteristic, data})=> {

  let iconPosition = ((Number(data.value) / 5) * 100).toFixed(2);
  iconPosition = iconPosition > 93? '93%': `${iconPosition}%`;

  return (
  <div>
    <header>{characteristic}</header>
    <StyledCharacteristicBar><StyledIcon position={iconPosition}>▼</StyledIcon></StyledCharacteristicBar>
  </div>
  )
}