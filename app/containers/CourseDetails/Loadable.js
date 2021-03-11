/**
 *
 * Asynchronously loads the component for CourseDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
