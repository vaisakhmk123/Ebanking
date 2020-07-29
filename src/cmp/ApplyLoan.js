import React, { Component } from 'react';
import './ApplyLoan.css';
const ApplyLoan =() =>
{
    const applyloan =() => {
        console.log("Apply for loan");
    }
    return <form onSubmit={applyloan}>
    <div>

        <table id="loan">
            <tr>
                <th colSpan="2"> Apply for loan</th>
            </tr>
            <tr>
                <td><label>Loan Type</label></td> <td><select >
                    <option value="0">select</option>
                    <option value="1">House</option>
                    <option value="2">Two wheeler</option>
                    <option value="3">Car</option>
                </select></td>
            </tr>
            <tr>
                <td><label>Loan Amount </label></td> <td> <input type="number" /></td>
            </tr>
            <tr>
                <td><label>Date</label></td> <td> <input type="date"/></td>
            </tr>
            <tr>
                <td><label>Duration(year)</label></td> <td> <select >
                    <option value="0">select</option>
                    <option value="1">6 month</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
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