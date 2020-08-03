import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory
  } from "react-router-dom";
import Account from '../user/Account';
import Protected from './Protected';
import ApplyLoan from '../loan/ApplyLoan';
// import Auth from './Auth';
import ViewLoan from '../loan/ViewLoan';
import {useSelector,useDispatch} from 'react-redux';
import {signout} from '../../actions';

const Welcome= () => {
  const history = useHistory();
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const logout =() => {
    history.push("/login");
    dispatch(signout());
  }

  return <div data-testid="welcome" id="welcome">
  
  <Router>
  <Link to="update">Update Account</Link>
  <Link to="apply">Apply for Loan</Link>
  <Link to="viewloans">View Loans</Link>
  <button onClick={logout}>Logout</button>
  {/* <Link to="logout">Logout</Link> */}
  <Switch>
    <Route path="/update"><Protected cmp= {Account}/></Route>
    <Route path="/apply"><Protected cmp= {ApplyLoan}/></Route>
    <Route path="/viewloans"><Protected cmp= {ViewLoan}/></Route>
  </Switch>
  </Router>
  </div>
}
export default Welcome;