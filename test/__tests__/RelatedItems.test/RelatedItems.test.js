/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../../../client/src/components/RelatedItems/Carousel.jsx';
import YourOutfit from '../../../client/src/components/RelatedItems/YourOutfit.jsx';
import data from '../../../client/src/components/RelatedItems/TestData.js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/dom';
import { act } from 'react-dom/test-utils';

let container;
it('Test Renderer', () => {

  act(() => {
    render(<Carousel data={data}><YourOutfit /></Carousel>)

    const button = screen.getByTestId('prevButton');
    expect(button).toBeDefined();
  })



})