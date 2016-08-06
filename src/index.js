import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';

import { Users } from './sources/users';
import { fetchUserStats } from './actions';

const store = configureStore();

Users.map(user => {
  store.dispatch(fetchUserStats(user));
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
