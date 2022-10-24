import create from 'zustand';
import axios from 'axios';

import {URL, TOKEN} from '/MyConfig.js';


//REFACTOR GET LADDER
const ProductStore = create((set, get) => ({
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
  setCurProduct: (title) => {
    get().Products.map((info)=> {
      if (info.name === title) {
        axios.get(`/products/${info.id}`, {
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
      }
    })
  },
  setStyle: (title) => {
    get().curProductStyles.map((info)=> {
      if (info.name === title) {
        set(() => ({curStyle: info}));
      }
    })
  },
  setCurrProdFromObject: (product) => {
    set(() => ({curProduct: product.data}));
    set(() => ({curStyle: product.styles.data.results[0]}));
    set(() => ({curProductStyles: product.styles.data.results}));
  }
}))


export default ProductStore;