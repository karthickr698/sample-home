import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the maeg state domain
 */

const selectMaegDomain = state => state.maeg || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Maeg
 */

const makeSelectMaeg = () =>
  createSelector(
    selectMaegDomain,
    substate => substate,
  );

export default makeSelectMaeg;
export { selectMaegDomain };
