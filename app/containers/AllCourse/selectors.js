import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the allCourse state domain
 */

const selectAllCourseDomain = state => state.allCourse || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AllCourse
 */

const makeSelectAllCourse = () =>
  createSelector(
    selectAllCourseDomain,
    substate => substate,
  );

export default makeSelectAllCourse;
export { selectAllCourseDomain };
