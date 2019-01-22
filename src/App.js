import React from 'react';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import Router from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router/>
  </Provider>
);

export default App;

