import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';

const {convertDate, ReviewTile} = require("../../../client/src/components/ratings-reviews/reviewTile.jsx");