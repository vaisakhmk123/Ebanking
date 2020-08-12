const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loanSchema = new Schema({
    id:{type:Number},
    loan_type :{type:String ,trim:true},
    loan_amount:{type:String ,trim:true},
    date: {type:String ,trim:true},
    duration:{type:String ,trim:true}
    // timestamps :true
})

const loans= mongoose.model('loans',loanSchema);
export default loans;