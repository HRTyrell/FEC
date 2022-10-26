import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';

const {ReviewTile} = require("../../../client/src/components/ratings-reviews/reviewTile.jsx");

const fakeData = {
  review_id: 1276325,
  rating: 4,
  summary: 'Michael says its good',
  recommend: true,
  response: null,
  body: "nice product!",
  date: '2022-09-02T00:00:00.000Z',
  reviewer_name: 'Michael',
  helpfulness: 8,
  photos: [
    {
      id: 2455912,
      url: 'https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png'
    }
  ]
}

describe('ReviewTile component', ()=> {
  const user = userEvent.setup();

  it ('should contain one img html element', ()=> {
    render(<ReviewTile review={fakeData}/>);
    let container= screen.getByTestId('photocontainerTEST')
    expect(container).toContainElement(screen.getByRole('zzz'));
  })

  it ('should contain 3 img html elements when 3 are passed', ()=> {

    fakeData.photos = [...fakeData.photos, {
      id: 2455912,
      url: 'https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png'
    }, {
      id: 1235,
      url: 'https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png'
    }]

    render(<ReviewTile review={fakeData}/>);

    expect(screen.getAllByRole('zzz')).toHaveLength(3);
  })

  it ('should change to a modal view showing full resolution photo upon clicking thumbnail and go back to thumbnail upon clicking full photo', ()=> {
    render(<ReviewTile review={fakeData}/>);
    let randomImgAmong3 = Math.floor(Math.random()*3);

    return user.click(screen.getAllByRole('zzz')[randomImgAmong3])
    .then(()=> {
      expect(screen.getAllByRole('zzzLarge')).toHaveLength(1);
    })
    .then(()=> {
      return user.click(screen.getByRole('zzzLarge'))
      .then(()=> {
        expect(screen.queryByRole('zzzLarge')).not.toBeInTheDocument();
      })
    })
  })

})