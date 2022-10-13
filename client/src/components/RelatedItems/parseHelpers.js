import axios from 'axios';
import axiosOptions from '../.env/config.js'

axios.get('/products', axiosOptions, res => {
  console.log(res);
});

export default;