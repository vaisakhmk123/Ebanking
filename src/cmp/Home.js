import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory
  } from "react-router-dom";
  import Account from './Account';
import Protected from './Protected';
import ApplyLoan from './ApplyLoan';
import Auth from './Auth';
import ViewLoan from './ViewLoan';


const Home= () => {
  const history = useHistory();
  const logout =() => {
    console.log("logout");
    history.push("/home");
  }

  return <div id="home">
  
  <Router>
  <Link to="update">Update Account</Link>
  <Link to="apply">Apply for Loan</Link>
  <Link to="viewloans">View Loans</Link>
  <button onClick={logout}>Logout</button>
  {/* <Link to="logout">Logout</Link> */}
  <switch>
    <Route path="/update"><Protected cmp= {Account}/></Route>
    <Route path="/apply"><Protected cmp= {ApplyLoan}/></Route>
    <Route path="/viewloans"><Protected cmp= {ViewLoan}/></Route>
  </switch>
  </Router>
  </div>
}
export default Home;