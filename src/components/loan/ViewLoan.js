import React, { Component } from '../../../node_modules/react';
import {AgGridReact} from '../../../node_modules/ag-grid-react';
import '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useSelector } from 'react-redux';
const ViewLoan =() => {

  const loanData = useSelector(state => state.loanList);
  const colDefn =[{headerName: "Loan type", field: "loan_type"},
                 {headerName: "Amount", field: "amount"},
                 {headerName: "Date", field: "date"}];
  const dataSource =[];
  loanData.loanList.forEach(element => {
    dataSource.push({loan_type:element.loan_type
      ,amount:element.amount
      ,date:element.date});
  });
  return <div
        className="ag-theme-alpine"
        style={{
        height: '250px',
        width: '600px',alignSelf:'center',paddingLeft:'25%'}}
      >
        <AgGridReact
          columnDefs={colDefn}
          rowData={dataSource}>
        </AgGridReact>
      </div>
  
}


export default ViewLoan;