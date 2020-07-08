const controller = require('../controller/index')
const router = require('express').Router()

router.post('/create',controller.addressController.createAddress)

module.exports = router