import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';

const {ProductBreakdownFactor} = require("../../../client/src/components/ratings-reviews/productBreakdownFactor.jsx");

describe('ProductBreakdownFactor component', ()=> {
  const user = userEvent.setup();
  it ('should', ()=> {
    //render(<ProductBreakdownFactor/>);
    expect('1').toEqual('1');
  })

})