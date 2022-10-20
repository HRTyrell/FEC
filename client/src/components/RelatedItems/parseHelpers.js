import axios from 'axios';
import {TOKEN} from '/MyConfig.js';

const options = {
  baseURL: 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/',
  headers: {Authorization: TOKEN}
}

export const getRelatedProducts = productId => {
  return axios.get(`/products/${productId}/related`, options)
  .then(data => {
    let newData = data.data.map(product => {
      return axios.get(`/products/${product}`, options).then(product => {
        return axios.get(`/products/${product.data.id}/styles`, options).then(styles => {
          product.styles = styles;
          return product;
        }

        )
        }
      )
    })
    return Promise.all(newData);
  })
}

export const getProductStyles = (productId) => {
  return axios.get(`/products/${productId}/styles`, options);
}

