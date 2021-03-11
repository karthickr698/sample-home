/**
 *
 * Asynchronously loads the component for CourseCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
