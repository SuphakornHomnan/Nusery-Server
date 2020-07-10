const controller = require('../controller/index')
const router = require('express').Router()

router.post('/upload', controller.enrollmentController.createEnroll)

module.exports = router