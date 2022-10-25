import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';

const {Breakdown} = require("../../../client/src/components/ratings-reviews/breakdown.jsx");
const {ProductBreakdownFactor} = require("../../../client/src/components/ratings-reviews/breakdown.jsx");

let fakeData = {
  "product_id": "66642",
  "ratings": {
      "1": "3",
      "2": "10",
      "3": "26",
      "4": "41",
      "5": "50"
  },
  "recommended": {
      "false": "25",
      "true": "105"
  },
  "characteristics": {
      "Fit": {
          "id": 223572,
          "value": "2.8709677419354839"
      },
      "Length": {
          "id": 223573,
          "value": "2.9040000000000000"
      },
      "Comfort": {
          "id": 223574,
          "value": "3.1680000000000000"
      },
      "Quality": {
          "id": 223575,
          "value": "3.1885245901639344"
      }
  }
}
const FakestarBarFilters = {1:true,2:true,3:true,4:true,5:true,filtered:false}

describe('breakdown', ()=> {
  const user = userEvent.setup()
  it("should render an average rating of 3.6", () => {
    fakeData.ratings = {
      "1": "0",
      "2": "0",
      "3": "5",
      "4": "3",
      "5": "1"
    }
    render(<Breakdown metaData={fakeData} starBarFilters={FakestarBarFilters} setstarBarFilters={()=>{}}/>);
    expect(screen.getByTestId('averagerating').textContent).toEqual('3.6');
  })

  it("should render a label of '39 total reviews'", () => {
    fakeData.recommended = {
      "false": 8,
      "true": 31
    }
    render(<Breakdown metaData={fakeData} starBarFilters={FakestarBarFilters} setstarBarFilters={()=>{}}/>);
    expect(screen.getByText('39 total reviews')).not.toBeNull();
  })

  it("should render a label of '45% of reviews recommend this product'", () => {
    fakeData.recommended = {
      "false": 55,
      "true": 45
    }
    render(<Breakdown metaData={fakeData} starBarFilters={FakestarBarFilters} setstarBarFilters={()=>{}}/>);
    expect(screen.getByText('45% of reviews recommend this product')).not.toBeNull();
  })

});
