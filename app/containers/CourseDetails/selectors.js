import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the courseDetails state domain
 */

const selectCourseDetailsDomain = state => state.courseDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CourseDetails
 */

const makeSelectCourseDetails = () =>
  createSelector(
    selectCourseDetailsDomain,
    substate => substate,
  );

export default makeSelectCourseDetails;
export { selectCourseDetailsDomain };
