import React , {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Navigation extends Component
{
    render() {
        return (
            <div id="index">
                <Link to="service">Online Service</Link>
                <Link to="about">About us</Link>
                <Link to="home">Login</Link>
                <Link to="register">Sign up</Link>
            </div>
        )
    }
}
export default Navigation;