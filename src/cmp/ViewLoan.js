import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
class ViewLoan extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{
          headerName: "Loan type", field: "make"
        }, {
          headerName: "Amount", field: "model"
        }, {
          headerName: "Date", field: "price"
        }],
        rowData: [{
          make: "2 wheeler", model: "40000", price: "12-01-2000"
        }, {
          make: "car", model: "500000", price: "13-01-2010"
        }, {
          make: "House", model: "2500000", price: "22-12-2020"
        }]
      }
    }
  
    render() {
      return (
        <div
          className="ag-theme-alpine"
          style={{
          height: '250px',
          width: '600px',alignSelf:'center',paddingLeft:'25%'}}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      );
    }
  }


export default ViewLoan;