import React from 'react';
import './App.scss';
import Home from './components/landing/Home';
import Login from './components/authentication/Login';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers';
import { applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {
  StaticRouter 
} from "react-router-dom";

const store = createStore(allReducer,applyMiddleware(thunk))
function App() {
  // localStorage.clear();
  // const history = createBrowserHistory();
  return (
    <StaticRouter>
    <Provider store ={store}>
    <div className="App">
      <Home/>
    </div>
    </Provider>
    </StaticRouter>
  );
}

export default App;
