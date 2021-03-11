/*
 * CourseCard Messages
 *
 * This contains all the text for the CourseCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CourseCard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CourseCard component!',
  },
});
