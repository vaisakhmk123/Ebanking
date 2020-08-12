// import {loans as Loans} from '../model/loan.model'
const mongoose= require('mongoose')
const Loans = mongoose.model('loans')

function viewloan(req,res){
  const loanList = [ {
    id:'' ,
    loan_type:'2 wheeler',
    amount:'500000',
    date:'12-02-2019',
    duration:'3'
}]
console.log("in viewloan middleware")
return res.json(loanList)
}

function applyLoan (req,res){
  const addNewUser = new Loans();
  addNewUser.loan_type =req.body.loan_type
  addNewUser.loan_amount =req.body.loan_amount
  addNewUser.date =req.body.date
  addNewUser.duration =req.body.duration
   addNewUser.save()
   .then(()=> {
    return res.json('Loan applied')
   })
   .catch(err => {
    return res.status(400).json('Error:' +err)
   })
}

module.exports = {viewloan,applyLoan}
