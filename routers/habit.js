const controller = require('../controller/index')
const router = require('express').Router()

router.post('/create', controller.habitController.createHabitList)

module.exports = router