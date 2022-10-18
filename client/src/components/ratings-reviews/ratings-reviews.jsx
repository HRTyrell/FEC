import {useState, useEffect} from 'react';
import axios from 'axios';
import {URL, TOKEN} from '/MyConfig.js';
import {Breakdown} from './breakdown.jsx';

const RatingsReviews = () => {

  let product_id = 66643;
  const [starBarFilters, setstarBarFilters]  = useState([true, true, true, true, true]);
  const [metaData, setmetaData]  = useState(null);
  const [sort, setSort]  = useState('relevant');
  const [searchBarTerm, setsearchBarTerm] = useState('');

  useEffect(()=> {
    axios({
      url: `${URL}/reviews/meta/?product_id=${product_id}`,
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
      <Breakdown metaData={metaData} setstarBarFilters={setstarBarFilters}></Breakdown>
      <input></input>


    </div>
  )
}

export default RatingsReviews;