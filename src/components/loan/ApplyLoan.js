import React, { useState } from '../../../node_modules/react';
import './ApplyLoan.css';
import { useDispatch } from 'react-redux';
import { applyloan } from '../../actions';



const ApplyLoan = () => {
    let amount =0
    let duration= ''
    let date =''
    let loan_type =''
    const [loan, setLoanstate] = useState([
        {
            id:'' ,
            loan_type:'',
            amount:'0.0000',
            date:'',
            duration:'0'
        }

    ]);
    const dispatch = useDispatch();
    const submitapplyloan = e => {
        e.preventDefault();
        dispatch(applyloan(loan))
        document.getElementById("myForm").reset();
        setLoanstate(
            {id:'' ,
            loan_type:'',
            amount:'0.0000',
            date:'',
            duration:'0'}
        )
    }
    let styles = {
        width: '100%'
      };
    const updateLoanModel = e => {
        setLoanstate(
           
            {
                ...loan,
                [e.target.name]:e.target.value
            }
        )
    }
    return <form id="myForm" onSubmit={submitapplyloan}>
        <div>

            <table id="loan">
                <tr>
                    <th colSpan="2"> Apply for loan</th>
                </tr>
                <tr>
                    <td><label>Loan Type</label></td> <td><select name="loan_type" value={loan.loan_type} onChange={updateLoanModel}>
                        <option value="0">select</option>
                        <option value="House">House</option>
                        <option value="2 Wheeler">Two wheeler</option>
                        <option value="Car">Car</option>
                    </select></td>
                </tr>
                <tr>
                    <td><label>Loan Amount </label></td> <td> <input type="number" name="amount" st value={loan.amount} onBlur={updateLoanModel} /></td>
                </tr>
                <tr>
                    <td><label>Date</label></td> <td> <input type="date" name="date" style={styles} value ={new Date()} value={loan.date} onBlur={updateLoanModel} /></td>
                </tr>
                <tr>
                    <td><label>Duration(year)</label></td> <td> <select name="duration" value={loan.duration} onChange={updateLoanModel}>
                        <option value="0">select</option>
                        <option value="6 month">6 month</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select></td>
                </tr>
                <tr>
                    <td colSpan="2"><input type="submit" value="Apply"></input></td>
                </tr>
            </table>
        </div>

    </form>
}

export default ApplyLoan;