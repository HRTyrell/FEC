import {useState, useEffect} from 'react';
import styled from "styled-components";
import Star from '../../assets/Star.png';
import quarterStar from '../../assets/quarterStar.png';
import halfStar from '../../assets/halfStar.png';
import threefourthsStar from '../../assets/3fourthsStar.png';
import fullstar from '../../assets/fullstar.png';

const StyledProgressBar = styled.progress`
  accent-color: green;
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
  display: flex;
  flex-direction: row;
  :hover {
    background: aliceblue;
  };
`;

const BreakdownDiv = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: solid;
  border-radius: 10px;
  width: 30%;
`
const NoShrinkLabel = styled.label`
  flex-shrink: 0;
`
const FixedWidthLabel = styled.div`
  display: block;
  float: left;
  width: 16px;
`

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
    <BreakdownDiv>RATINGS & REVIEWS
      <div>
        <label role="averagerating">{avg}</label>
        <Starbar rating={avg}></Starbar>
      </div>
      <label>{`${totalRatings} total reviews`}</label>
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
              <NoShrinkLabel>{item + ' Stars'}</NoShrinkLabel><StyledProgressBar max={totalRatings} value={metaData.ratings[item]}></StyledProgressBar><FixedWidthLabel>{metaData.ratings[item]}</FixedWidthLabel>
            </StyledHoverable>
            )
        })}
      <label>{`${(Number(metaData.recommended.true) / (Number(metaData.recommended.true) + Number(metaData.recommended.false))).toFixed(2) * 100}% of reviews recommend this product`}</label>

      {Object.keys(metaData.characteristics).map((characteristic, index)=> {
        return <ProductBreakdownFactor key={index} characteristic={characteristic} data={metaData.characteristics[characteristic]}/>
      })}

    </BreakdownDiv>
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
