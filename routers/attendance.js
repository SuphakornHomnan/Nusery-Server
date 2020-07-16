const controller = require('../controller/index')
const router = require('express').Router()

router.post('/create', controller.attendanceController.addAttendanceList)

module.exports = router