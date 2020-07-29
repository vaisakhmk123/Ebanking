import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

function Protected(props) {
    var auth= localStorage.getItem("authorized");
    // var auth= true;
    const Cmp = props.cmp;
    return <div> {auth=="valid" ? <Redirect to="/home"></Redirect> :<Cmp />}</div>
}

export default Protected;

