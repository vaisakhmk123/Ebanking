const mongoose =require('mongoose')
const Users = mongoose.model('users')

function isAuthenticated(req){

  const username = req.body.user_name;
  const password = req.body.password;
  if(username === 'admin' && password ==="admin"){
    res.json('isAuthenticated :'+ true)
  } else {
    res.json('isAuthenticated :'+ false)
  }
}

function addUser(req, res){
  const addNewUser = new Users();
  addNewUser.name = req.body.name;
  addNewUser.user_name= req.body.user_name
  addNewUser.password= req.body.password
  addNewUser.confirm_pass= req.body.confirm_pass
  addNewUser.address= req.body.address
  addNewUser.email= req.body.email
  addNewUser.country= req.body.country
  addNewUser.state= req.body.state
  addNewUser.pan= req.body.pan
  addNewUser.contact= req.body.contact 
  addNewUser.save()
  .then(()=>res.json('User registered'))
  .catch(err => res.status(400).json('Error:' +err))
}

function updateUser(req,res){
 // Users.findById
  // const addNewUser =new Users({
  //   name = req.body.name,
  //   user_name= req.body.user_name,
  //   password= req.body.password,
  //   confirm_pass= req.body.confirm_pass,
  //   address= req.body.address,
  //   email= req.body.email,
  //   country= req.body.country,
  //   state= req.body.state,
  //   pan= req.body.pan,
  //   contact= req.body.contact
  // })
  // addNewUser.save()
  // .then(()=>res.json('User registered'))
  // .catch(err => res.status(400).json('Error:' +err))
  res.json("Message: "+"User data updated")
}


module.exports = {isAuthenticated,addUser,updateUser}

