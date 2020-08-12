const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id:{type:Number},
    name :{type:String ,trim:true},
    user_name:{type:String ,trim:true},
    password: {type:String ,trim:true},
    confirm_pass:{type:String ,trim:true},
    address:{type:String ,trim:true ,maxlength :50},
    email:{type:String ,trim:true ,maxlength:15},
    country:{type:String ,trim:true},
    state:{type:String ,trim:true},
    pan:{type:String ,trim:true},
    contact:{type:String ,trim:true},
    account_no:{type:String ,trim:true}
    // timestamps :true
})
const users = mongoose.model('users',userSchema);

export default users;