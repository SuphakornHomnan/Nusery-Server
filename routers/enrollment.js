const controller = require('../controller/index')
const router = require('express').Router()
const multer = require('multer')
var path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/enrollment'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})
var upload = multer({ storage: storage })

router.post('/upload', controller.enrollmentController.createEnroll)
router.put('/update', controller.enrollmentController.uploadEnroll)
router.put('/uploadPhoto/:id', upload.single('signPhoto'), controller.enrollmentController.uploadPhoto)

module.exports = router