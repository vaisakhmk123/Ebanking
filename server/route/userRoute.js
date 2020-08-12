const express = require("express")
const router = express.Router()

const userController = require('../controller/userController')


router.get("authenticate",userController.isAuthenticated)
router.post("/adduser",userController.addUser);
router.get("/updateuser",userController.updateUser);

module.exports = router;