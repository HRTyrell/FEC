import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';

import RatingsReviews from "../../../client/src/components/ratings-reviews/ratings-reviews.jsx";

describe('RatingsReviews component', ()=> {
  const user = userEvent.setup();

  it ('should', ()=> {
    render(<RatingsReviews curProduct={{id: 66642, name:'camo'}}/>);
    return waitFor(()=> {expect(screen.getByTestId('h2TEST')).toBeInTheDocument})
    .then(()=> {
      expect(screen.getByText('RATINGS & REVIEWS')).not.toBeNull();
    })
    .then(()=> {
      expect(screen.queryAllByText(/.*/).length).toBeGreaterThan(5);
    })
  })

})