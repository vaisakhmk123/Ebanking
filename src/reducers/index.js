import loggedReducer from './loggedReducer';
import {combineReducers} from 'redux';
import LoanReducer from './LoanReducer';
import UsersReducer from './UsersReducer';

const allReducers = combineReducers ({
     isLogged :loggedReducer,
     loanList :LoanReducer,
    users:UsersReducer
});
export default allReducers;