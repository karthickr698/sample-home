/**
 *
 * Asynchronously loads the component for Instructor
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
