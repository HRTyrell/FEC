import {useState, useEffect} from 'react';
import Star from '../../assets/star.png';
import quarterStar from '../../assets/quarterStar.png';
import halfStar from '../../assets/halfStar.png';
import threefourthsStar from '../../assets/3fourthsStar.png';
import fullstar from '../../assets/fullstar.png';

export const getAvg = function(ratings) {
  let averageRating = [];
  for (var key in ratings) {
    averageRating = averageRating.concat(new Array(Number(ratings[key])).fill(Number(key)));
  }
  averageRating = averageRating.reduce((accumulator, val)=>{return accumulator + val}, 0) / averageRating.length;
  return Number(averageRating.toFixed(1));
}

export const Breakdown = function ({metaData, setstarBarFilters}) {

  let avg = getAvg(metaData.ratings);
  console.log(metaData);

  return (
    <div>RATINGS & REVIEWS
      <img src={Star}></img>
    </div>
  )
}
