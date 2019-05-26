import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './simple-redux/simple.redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import { gun } from './gun-redux';
// , applyMiddleware(thunk)
const store = createStore(gun);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));