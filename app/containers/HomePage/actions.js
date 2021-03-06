/*
 *
 * HomePage actions
 *
 */

import {
  FETCH_EVENTS,
  FETCH_EVENTS_ERROR,
  FETCH_EVENTS_SUCCESS,
  FETCH_JOINED_COUNTS,
  FETCH_JOINED_COUNTS_ERROR,
  FETCH_JOINED_COUNTS_SUCCESS,
} from './constants';

export function fetchEvent() {
  return {
    type: FETCH_EVENTS,
  };
}

export function fetchEventSuccess() {
  return {
    type: FETCH_EVENTS_SUCCESS,
  };
}

export function fetchEventError() {
  return {
    type: FETCH_EVENTS_ERROR,
  };
}

export function fetchJoinedCount() {
  return {
    type: FETCH_JOINED_COUNTS,
  };
}

export function fetchJoinedCountSuccess() {
  return {
    type: FETCH_JOINED_COUNTS_SUCCESS,
  };
}

export function fetchJoinedCountError() {
  return {
    type: FETCH_JOINED_COUNTS_ERROR,
  };
}
