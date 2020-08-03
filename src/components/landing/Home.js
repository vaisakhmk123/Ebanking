import React , {Component} from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import AppRoute from '../../AppRoute';
import { useSelector } from 'react-redux';


  const Home = () => {
    const isLogged = useSelector(state => state.isLogged);
      return <div id="index">
          <Router>
            <Link to={isLogged==true?"#":"service"}>Online Service</Link>
            <Link to={isLogged?"#":"about"}>About us</Link>
            <Link to= {isLogged?"#":"login"}>Login</Link>
            <Link to={isLogged?"#":"register"}>Sign up</Link>
            <AppRoute/>
           </Router>
            </div>
  }

export default Home;