import {createStore} from 'redux';
const initialState = {
    loanList :[
        {
            id:'' ,
            loan_type:'2 wheeler',
            amount:'500000',
            date:'12-02-2019',
            duration:'3'
        }
    ]
}

const loanReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case 'APPLY_LOAN':
            return{
                ...state,
                loanList :[...state.loanList,action.payload]
            }
        default :
            return state;
        
    }
}
export default loanReducer;