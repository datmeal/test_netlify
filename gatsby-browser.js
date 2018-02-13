import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// import createStore from './src/state/createStore';
import { createStore as reduxCreateStore } from 'redux';
import content from './src/components/reducer';

exports.replaceRouterComponent = ({ history }) => {
  // const store = createStore();
  const store = reduxCreateStore(content);

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};
