import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Welcome from './components/landing/Welcome';
import Login from './components/authentication/Login';
import Service from './components/landing/Service';
import About from './components/landing/About';
import Home from './components/landing/Home';
import Protected from './components/landing/Protected';
import Registration from './components/user/Registration';
import { useSelector } from 'react-redux';
const AppRoute = () => {
    const isLogged = useSelector(state => state.isLogged);
    return <div> 
        <Switch> <Route path="/service"><Protected cmp={Service} /></Route>
            <Route path="/about"><Protected cmp={About} /></Route>
            <Route path="/register"><Protected cmp={Registration} /></Route>
            <Route path="/home"><Protected cmp={Home} /></Route>
            <Route path="/welcome"><Protected cmp={Welcome} /></Route>
            <Route path="/login"><Protected cmp={Login} /></Route>
        </Switch>
    </div>
}
export default AppRoute;