const controller = require('../controller/index')
const router = require('express').Router()

router.post('/upload' , controller.custodianController.createCustodian)

module.exports = router