import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object
}

RouterConfig.defaultProps = {
  history: {}
}

export default RouterConfig;
