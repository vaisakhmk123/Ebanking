const express = require("express")
const router = express.Router()

const loanController = require('../controller/loanController')


router.get("/viewloan",loanController.viewloan);
router.get("/applyLoan",loanController.applyLoan);

module.exports = router;