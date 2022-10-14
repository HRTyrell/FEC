import axios from 'axios';

export default function getProducts() {

return  axios.get('/products', {
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/',
  headers: { 'Authorization': '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'
}}).then(res => {
    return res;
}).catch(err => {
  console.log(err);
});
};