import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from '../src/Components/redux/reducers'

const store = createStore(
  rootReducer
)

// document.title = "Bizwy";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

