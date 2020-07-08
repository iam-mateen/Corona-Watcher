import React from 'react';
import Router from './routes/router';
import { Provider } from 'react-redux';

import store from './store/store';

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
