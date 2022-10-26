import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor, within} from '@testing-library/react';

const {ReviewsList} = require("../../../client/src/components/ratings-reviews/reviewsList.jsx");
import RatingsReviews from "../../../client/src/components/ratings-reviews/ratings-reviews.jsx";

const fakeData1 = {1:true, 2:true, 3:true, 4:false, 5:true, filtered:false};
const fakeData2 = 66642;

describe('ReviewsList component', ()=> {
  const user = userEvent.setup();
  it ('should start off rending only 2 tiles', ()=> {
    render(<ReviewsList product_id={fakeData2} starBarFilters={fakeData1}/>);
    return waitFor(()=> {expect(screen.getByTestId('h3TEST')).toBeInTheDocument()})
      .then(()=> {
        expect(screen.getAllByRole('reviewtileTEST')).toHaveLength(2);
      })
  })
})