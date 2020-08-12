import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 import {createStore} from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';
import { fetchUserFailure,fetchUserSuccess,fetchUserRequest } from './actions';
import thunk from 'redux-thunk';
import { applyMiddleware,compose } from 'redux';


const axios = require('axios')
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducer,applyMiddleware(thunk))
ReactDOM.hydrate(
  <React.StrictMode>
     {/* Providing store to entire application */}
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
