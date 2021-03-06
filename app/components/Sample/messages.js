/*
 * Sample Messages
 *
 * This contains all the text for the Sample component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Sample';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Sample component!',
  },
});
