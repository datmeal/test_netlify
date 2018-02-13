import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

// import createStore from './src/state/createStore';
import { createStore as reduxCreateStore } from 'redux';
import content from './src/components/reducer';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  // const store = createStore();
  const store = reduxCreateStore(content);

  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
