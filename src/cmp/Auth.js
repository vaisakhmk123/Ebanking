import React, { Component, useState } from "react";
import { withRouter } from 'react-router-dom';
import './Auth.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";
 const Auth = () => {
    const history = useHistory();
    const [uname ,setUname] =useState(null);
    const [password ,setPassword] =useState(null);
    const login = () => {
        var auth = "invalid";
        if (uname&&password) {
            if (uname === "admin" && password === "admin") {
                // auth = localStorage.setItem("authorized", "valid");
                history.push("/welcome");
            } else {
                // auth = localStorage.setItem("authorized", "invalid");
            }
        }
    }
    if (localStorage.getItem("authorized") == null) {
        localStorage.setItem("authorized", "invalid");
    }
    var auth = localStorage.getItem("authorized");
    return auth == "invalid" ? <div id="content-div">
        Username <input type="text" onChange={(e) => { setUname(e.target.value) }} /><br /><br />
        Password <input type="password" onChange={(e) => {setPassword(e.target.value) }} /><br /><br />
        <button onClick={login}>Login</button>
    </div> : history.push("/welcome");
}
// class Auth extends Component {

//     login() {
//         var auth = "invalid";
//         <Redirect to="/home"></Redirect>
//         if (this.state) {
//             if (this.state.email === "admin" && this.state.password === "admin") {
//                 auth = localStorage.setItem("authorized", "valid");
//             } else {
//                 auth = localStorage.setItem("authorized", "invalid");
//             }
//         }
//         if (auth == "valid") {
//             this.props.history.push("/home")

//         }
//     }

//     render() {
//         if (localStorage.getItem("authorized") == null) {
//             localStorage.setItem("authorized", "invalid");
//         }
//         var auth = localStorage.getItem("authorized");
//         return (
//             <div>
//                 {auth == "invalid" ?
//                     <div>
//                         Username <input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
//                 Password <input type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />
//                         <button onClick={() => this.login()}>Login</button>
//                     </div>
//                     : <Redirect to="/home"></Redirect>
//                 }
//             </div>
//         )
//     }

// }
export default Auth;