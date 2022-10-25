import React, {useState, useEffect} from 'react';
import checkMark from '../../assets/checkMark.png';


const Feature = ({currentProductFeatures, comparisonProductFeatures, feature}) => {

  const existsInCurrent = currentProductFeatures.includes(feature);
  const existsInComparison = comparisonProductFeatures.includes(feature);

  return (

    <div style={{
      display: 'flex',
      flexDirection: 'row',

    }}>

      {existsInCurrent ? <img src={checkMark} style={{
        display: 'flex',
        alignSelf: 'left',
        height: "1em",
        width: "1em"
      }}/> : null}

      <p style={{
        display: 'flex',
        alignSelf: 'center'
      }}>{feature.value + ' ' + feature.feature}</p>

      {existsInComparison ? <img src={checkMark}style={{
        display: 'flex',
        alignSelf: 'right',
        height: "1em",
        width: "1em"
      }}/> : null}
    </div>

  )
}
export default Feature;