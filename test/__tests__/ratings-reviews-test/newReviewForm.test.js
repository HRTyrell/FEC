import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';

const {NewReviewForm, convertcharacteristicsTable} = require("../../../client/src/components/ratings-reviews/newReviewForm.jsx");

describe('newReviewForm component', ()=> {
  const user = userEvent.setup();

  it('should',()=> {
    //render(<NewReviewForm/>)
    expect('1').toEqual('1')
  })

})