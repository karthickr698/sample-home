/**
 *
 * Sample
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Sample() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Sample.propTypes = {};

export default memo(Sample);
