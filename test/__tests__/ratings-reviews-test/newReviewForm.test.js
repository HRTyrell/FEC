import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor, fireEvent} from '@testing-library/react';

const {NewReviewForm, convertcharacteristicsTable} = require("../../../client/src/components/ratings-reviews/newReviewForm.jsx");
import RatingsReviews from "../../../client/src/components/ratings-reviews/ratings-reviews.jsx";

describe('newReviewForm component', ()=> {
  const user = userEvent.setup();

  it('should bring up the form upon clicking the submit new review button',()=> {
    render(<RatingsReviews curProduct={{id: 66642, name:'camo'}}/>);
    return waitFor(()=>{expect(screen.queryByTestId('h2TEST')).toBeInTheDocument()})
    .then(()=> {
      expect(screen.getByTestId('newreviewbuttonTEST')).toBeInTheDocument();

      return user.click(screen.getByTestId('newreviewbuttonTEST'))
      .then(()=> {
        expect(screen.queryByTestId('newreviewbuttonTEST')).not.toBeInTheDocument();
        expect(screen.queryByTestId('newreviewformTEST')).toBeInTheDocument();
      })
    })
  })

  it("should have a subtitle of 'About the (insert product)'", ()=> {
    render(<RatingsReviews curProduct={{id: 66642, name:'testCAMO'}}/>);
    return waitFor(()=>{expect(screen.queryByTestId('h2TEST')).toBeInTheDocument()})
    .then(()=> {
      return user.click(screen.getByTestId('newreviewbuttonTEST'))
      .then(()=> {
        expect(screen.queryAllByText(`About the testCAMO`)).toHaveLength(1);
      })
    })
  })

  it('should not submit the form upon attempting to with nothing filled in', ()=> {
    render(<RatingsReviews curProduct={{id: 66642, name:'testCAMO'}}/>);
    return waitFor(()=>{expect(screen.queryByTestId('h2TEST')).toBeInTheDocument()})
    .then(()=> {
      return user.click(screen.getByTestId('newreviewbuttonTEST'))
      .then(()=> {
        return user.click(screen.getByTestId('newreviewformsubmitTEST'))
        .then(()=> {
          expect(screen.queryByTestId('newreviewbuttonTEST')).not.toBeInTheDocument();
          expect(screen.queryByTestId('newreviewformTEST')).toBeInTheDocument();
        })
      })
    })
  })

  it('should submit the form upon attempting to with all requirements filled in', ()=> {
    render(<RatingsReviews curProduct={{id: 66642, name:'testCAMO'}}/>);
    return waitFor(()=>{expect(screen.queryByTestId('h2TEST')).toBeInTheDocument()})
    .then(()=> {
      return user.click(screen.getByTestId('newreviewbuttonTEST'))
      .then(()=> {
        fireEvent(screen.getAllByRole('setratingTEST')[1], new MouseEvent('click'))
        return user.click(screen.getByTestId('newreviewformsubmitTEST'))
        .then(()=> {
          expect(screen.queryByTestId('newreviewbuttonTEST')).not.toBeInTheDocument();
          expect(screen.queryByTestId('newreviewformTEST')).toBeInTheDocument();
        })
      })
    })
  })

})