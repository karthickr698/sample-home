import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the instructor state domain
 */

const selectInstructorDomain = state => state.instructor || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Instructor
 */

const makeSelectInstructor = () =>
  createSelector(
    selectInstructorDomain,
    substate => substate,
  );

export default makeSelectInstructor;
export { selectInstructorDomain };
