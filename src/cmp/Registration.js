import React, { Component } from 'react';
import './Registration.css';
const Registration = () => {
    const register = () => {
        console.log("registered");
    }

    return <form onSubmit={register}>
        <div>

            <table>
                <tr>
                    <th colSpan="4"> User Registation</th>
                </tr>
                <tr>
                    <td><label>Name</label></td> <td> <input type="text" /></td>
                    <td><label>Username </label></td><td><input type="text" /> </td>
                </tr>
                <tr>
                    <td><label>Password </label></td> <td> <input type="password" /></td>
                    <td><label>Confirm password </label></td><td><input type="password" /> </td>
                </tr>
                <tr>
                    <td><label>Address</label></td><td><input type="textarea" /></td>
                    <td>
                        <label>Email </label></td><td><input type="email" />
                    </td>
                </tr>
                <tr>
                    <td> <label>Country </label></td> <td><select >
                        <option value="0">select</option>
                        <option value="1">India</option>
                        <option value="2">UK</option>
                    </select>
                    </td>
                    <td> <label>State</label></td><td>
                        <select >
                            <option value="0">select</option>
                            <option value="1">Kerala</option>
                            <option value="2">Tamilnadu</option>
                        </select>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <label>PAN </label></td><td><input type="text" />
                    </td>
                    <td>
                        <label>Contact No </label></td><td><input type="number" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="4"><input type="submit" value="Submit"></input></td>
                </tr>
            </table>
        </div>

    </form>
}
export default Registration;