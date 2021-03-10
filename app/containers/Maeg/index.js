/**
 *
 * Maeg
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMaeg from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Maeg() {
  useInjectReducer({ key: 'maeg', reducer });
  useInjectSaga({ key: 'maeg', saga });

  return (
    <div>
      <Helmet>
        <title>Maeg</title>
        <meta name="description" content="Description of Maeg" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Maeg.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  maeg: makeSelectMaeg(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Maeg);
