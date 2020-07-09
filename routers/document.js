const controller = require('../controller/index')
const router = require('express').Router()

router.post('/upload', controller.documentController.createDocument)

module.exports = router