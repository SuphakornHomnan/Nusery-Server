const controller = require('../controller/index')
const router = require('express').Router()

router.post('/create', controller.medicalController.createMedicalList)

module.exports = router