import {useState, useEffect} from 'react';
import axios from 'axios';
import {TOKEN} from '/config.js';
import {Breakdown} from './breakdown.jsx';

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
    <div>
      <Breakdown metaData={metaData} starBarFilters={starBarFilters} setstarBarFilters={setstarBarFilters}></Breakdown>
      <input></input>


    </div>
  )
}

export default RatingsReviews;