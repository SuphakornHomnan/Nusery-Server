const controller = require('../controller/index')
const router = require('express').Router()

router.post('/upload', controller.fatherController.createFather)

module.exports = router