const controller = require('../controller/index')
const router = require('express').Router()

router.post('/upload', controller.motherController.createMother)

module.exports = router