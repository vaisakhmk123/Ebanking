import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'
import mongoose from 'mongoose';
import {loans as Loans} from './model/loan.model'
import {users as Users} from './model/user.model'
import loanRoute from './route/loanRoute'
import userRoute from './route/userRoute'

const bodyParser = require('body-parser');
const PORT = 8000
const app = express()
const router = express.Router()

mongoose.connect("mongodb+srv://vmk:welcome123@cluster0.dr12w.mongodb.net/Ebanking?retryWrites=true&w=majority"
,{useNewUrlParser: true,useUnifiedTopology: true})
.then(
console.log("db connected")
)

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)
router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules

app.use(router)

app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
app.use("/api/loans",loanRoute)
app.use("/api/users",userRoute)

// app.get('/islogin', (req, res) => {
//   const username = req.body.user_name;
//   const password = req.body.password;
//   if(username === 'admin' && password ==="admin"){
//     res.json('isAuthenticated :'+ true)
//   } else {
//     res.json('isAuthenticated :'+ false)
//   }
//   next();
// })

// app.get('/adduser',(req,res) =>{

//   // const addNewUser =new Users({
//   //     name = req.body.name,
//   //     user_name= req.body.user_name,
//   //     password= req.body.password,
//   //     confirm_pass= req.body.confirm_pass,
//   //     address= req.body.address,
//   //     email= req.body.email,
//   //     country= req.body.country,
//   //     state= req.body.state,
//   //     pan= req.body.pan,
//   //     contact= req.body.contact
//   //   })
//   //   addNewUser.save()
//   //   .then(()=>res.json('User registered'))
//   //   .catch(err => res.status(400).json('Error:' +err))
//    res.json("Message : "+"User details added")
//     next();
// });

// app.get('/viewloans', (req, res) => {
//   const loanList = [ {
//     id:'' ,
//     loan_type:'2 wheeler',
//     amount:'500000',
//     date:'12-02-2019',
//     duration:'3'
// }]
// res.json(loanList)
// })

// app.post('/applyLoan', (req, res) => {
//   //  const addNewUser =new Loans({
//   //   loan_type = req.body.loan_type,
//   //   loan_amount= req.body.loan_amount,
//   //   date= req.body.date,
//   //   duration= req.body.duration
//   //  })
//   //  addNewUser.save()
//   //  .then(()=>res.json('Loan applied'))
//   //  .catch(err => res.status(400).json('Error:' +err))
//   res.json("Message: "+"Loan data added")
//    next()
// })
// app.use(express.static('./build'))
// const {viewLoans,applyLoan} = require('../server/middleware/loanMiddleware')
// const {isAuthenticated,addUser,updateUser} = require('../server/middleware/userMiddleware')
