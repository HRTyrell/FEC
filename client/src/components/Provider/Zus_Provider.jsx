import create from 'zustand';
import axios from 'axios';

import {URL, TOKEN} from '../../../../MyConfig.js';

const GetRequest = (req) => {
  return axios.get(req, {
    baseURL: URL,
    headers: {'Authorization': TOKEN}
  });
}

const WeightedAvg = (obj) => {
  let count = 0;
  let holder = 0;
  for (let key in obj) {
    holder += key * obj[key];
    count += obj[key] * 1;
  }
  //To see current Stars
  // console.log('I AM NUM', (Math.round((holder/count) * 4) / 4))
  return (Math.round((holder/count) * 4) / 4);
}

const ProductStore2 = create((set, get) => ({
  Products: null,
  curProduct: null,
  curProductStyles: null,
  curStyle: null,
  curStars: null,
  getProducts: () => {
    GetRequest('/products')
    .then(({data}) => {
      set(() => ({Products: data}));
      get().setCurProduct(data[0].name);
    })
  },
  setCurProduct: (title) => {
    get().Products.map((info)=> {
      if (info.name === title) {
        get().setStars(info.id);
        GetRequest(`/products/${info.id}`)
        .then(({data}) => {
          set(() => ({curProduct: data}))
          get().setCurStyles(data);
        })
      }
    })
  },
  setCurStyles: (data) => {
    GetRequest(`/products/${data.id}/styles`)
    .then(({data}) => {
      set(() => ({curProductStyles: data.results}));
      data.results.map((obj) => {
        if (obj["default?"] === true) {
          set(() => ({curStyle: obj}))
        }
      })
    })
  },
  setStyle: (title) => {
    get().curProductStyles.map((info)=> {
      if (info.name === title) {
        set(() => ({curStyle: info}));
      }
    })
  },
  setStars: (id) => {
    GetRequest(`/reviews/meta/?product_id=${id}`)
    .then(({data}) => {
      let holder = WeightedAvg(data.ratings);
      set(() => ({curStars: holder}))
    })
  }
}))

export default ProductStore2;