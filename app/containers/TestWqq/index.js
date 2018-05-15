/**
 *
 * TestWqq
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTestWqq from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class TestWqq extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>TestWqq</title>
          <meta name="description" content="Description of TestWqq" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

TestWqq.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testwqq: makeSelectTestWqq(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testWqq', reducer });
const withSaga = injectSaga({ key: 'testWqq', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TestWqq);
