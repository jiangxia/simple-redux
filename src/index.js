import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from './simple-redux/simple-redux';
import thunk from './simple-redux/simple-redux-thunk';
import arrayThunk from './simple-redux/simple-redux-array'
import { Provider } from './simple-redux/simple-react-redux';

import App from './App';
import { gun } from './gun-redux';

const store = createStore(gun, applyMiddleware(thunk, arrayThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));