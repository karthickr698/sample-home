/**
 *
 * Asynchronously loads the component for AllCourse
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
