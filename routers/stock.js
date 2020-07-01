const controller = require('../controller/index')
const router = require('express').Router()

router.post("/", controller.stockController.createList)
router.get("/", controller.stockController.getList)

module.exports = router