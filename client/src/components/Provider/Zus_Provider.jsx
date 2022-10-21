import create from 'zustand';
import axios from 'axios';

import {URL, TOKEN} from '/MyConfig.js';

const ProductStore = create((set) => ({
  Products: null,
  curProduct: null,
  curProductStyles: null,
  curStyle: null,
  getProducts: () => {
    axios.get('/products', {
      baseURL: URL,
      headers: {'Authorization': TOKEN}
    })
    .then(({data}) => {
      set(() => ({Products: data}));
      return data;
    })
    .then((data) => {
      axios.get(`/products/${data[0].id}`, {
        baseURL: URL,
        headers: {'Authorization': TOKEN}
      })
      .then(({data}) => {
        set(() => ({curProduct: data}))
        return data;
      })
      .then((data) => {
        axios.get(`/products/${data.id}/styles`, {
          baseURL: URL,
          headers: {'Authorization': TOKEN}
        })
        .then(({data}) => {
          set(() => ({curProductStyles: data.results, }));
          data.results.map((obj) => {
            if (obj["default?"] === true) {
              set(() => ({curStyle: obj}))
            }
          })
        })
      })
    })
  },
  setCurProduct: (i) => {
    console.log(i)
  },
  getStyles: (i) => {
    console.log(i)
  }
}))


export default ProductStore;