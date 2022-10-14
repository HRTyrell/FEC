import {useState, useEffect} from 'react';

const Breakdown = function ({metaData, setstarBarFilters}) {

  console.log(metaData);

  let averageRating = [];
  for (var key in metaData.ratings) {
    averageRating = averageRating.concat(new Array(Number(metaData.ratings[key])).fill(Number(key)));
  }
  averageRating = averageRating.reduce((accumulator, val)=>{return accumulator + val}, 0) / averageRating.length;
  console.log(averageRating)

  return (
    <div>RATINGS & REVIEWS

    </div>
  )
}

export default Breakdown