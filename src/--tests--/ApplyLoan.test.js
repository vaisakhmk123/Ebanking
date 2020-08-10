  
import { applyloan } from "../actions";
import LoanReducer from "../reducers/LoanReducer";


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

const addLoanNewState = {
    loanList :[
        {
            id:'' ,
            loan_type:'2 wheeler',
            amount:'500000',
            date:'12-02-2019',
            duration:'3'
        },
        {
            id:'' ,
            loan_type:'House',
            amount:'300000',
            date:'12-02-2019',
            duration:'25'
        }
    ]
}

describe("apply loan reducer", () => {

  it("should add loan to the store", () => {
    expect(
        LoanReducer(initialState, {
        type: applyloan(),
        payload: [{
            id:'' ,
            loan_type:'House',
            amount:'300000',
            date:'12-02-2019',
            duration:'25'
        }],
      })
    ).toEqual(addLoanNewState);
  });
});