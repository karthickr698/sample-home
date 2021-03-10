/**
 *
 * Asynchronously loads the component for Maeg
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
