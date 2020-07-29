import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home';
import Service from './cmp/Service';
import About from './cmp/About';
import Auth from './cmp/Auth';
import Protected from './cmp/Protected';
import Navigation from './cmp/Navigation';
import Registration from './cmp/Registration';
import Account from './cmp/Account';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  localStorage.clear();
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <switch>
          <Route path="/service"><Protected cmp= {Service}/></Route>
          <Route path="/about"><Protected cmp= {About}/></Route>
          <Route path="/register"><Protected cmp= {Registration}/></Route>
          <Route path="/home"><Protected cmp= {Auth}/></Route>
          <Route path="/welcome"><Protected cmp= {Home}/></Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
