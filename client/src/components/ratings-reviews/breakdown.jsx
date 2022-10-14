import {useState, useEffect} from 'react';
import axios from 'axios';
import {TOKEN} from '/config.js';

const Breakdown = () => {

  let exampleProductID = 66643;
  const [starBarFilters, setstarBarFilters]  = useState([true, true, true, true, true]);
  const [metaData, setmetaData]  = useState(null);
  const [sort, setSort]  = useState('relevant');
  const [searchBarTerm, setsearchBarTerm] = useState('');

  useEffect(()=> {
    axios({
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta/?product_id=${exampleProductID}`,
      method: 'get',
      headers: {authorization: TOKEN}
      })
      .then((val)=> {
        //console.log(val.data)
        setmetaData(val.data)
      })
      .catch((err)=> {
        alert(err);
      })
  }, []);

  return (
    <div>
      <input></input>


    </div>
  )
}

export default Breakdown;