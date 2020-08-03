import React, { Component, useState } from "react";
import { withRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {signin} from '../../actions';
 const Login = () => {
    const history = useHistory();
    const [uname ,setUname] =useState(null);
    const [password ,setPassword] =useState(null);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    const login = () => {
        var auth = "invalid";
        if (uname&&password) {
            if (uname === "admin" && password === "admin") {                
                history.push("/welcome");
                dispatch(signin());
            } else {
                   }
        }
    }


    // function handleSubmit(event) {
    
    //     setState({loading: true, resolved: false, error: null})
    //     window.fetch('/api/login', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //           username: uname,
    //           password: password
    //         }),
    //       })
    //       .then(r => r.json())
    //       .then(
    //         user => {
    //           setState({loading: false, resolved: true, error: null})
    //           window.localStorage.setItem('token', user.token)
    //         },
    //         error => {
    //           setState({loading: false, resolved: false, error: error.message})
    //         },
    //       )
    //   }
    



    if (localStorage.getItem("authorized") == null) {
        localStorage.setItem("authorized", "invalid");
    }
    var auth = localStorage.getItem("authorized");
    return !isLogged ? <div id="content-div">
        Username <input type="text" data-testid="uname" onChange={(e) => { setUname(e.target.value) }} /><br /><br />
        Password <input type="password" data-testid="password" onChange={(e) => {setPassword(e.target.value) }} /><br /><br />
        <button data-testid="login" onClick={login}>Login</button>
    </div> : history.push("/welcome");
}

export default Login;