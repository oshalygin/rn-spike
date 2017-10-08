import React from 'react';
import { Provider } from 'react-redux';

import Application from './components/Application';
import { configureStore } from './store/configureStore';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

export default Root;
