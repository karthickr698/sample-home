/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  FETCH_EVENTS,
  FETCH_EVENTS_ERROR,
  FETCH_EVENTS_SUCCESS,
  FETCH_JOINED_COUNTS,
  FETCH_JOINED_COUNTS_ERROR,
  FETCH_JOINED_COUNTS_SUCCESS,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH_EVENTS:
        break;
    }
  });

export default homePageReducer;
