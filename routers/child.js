const controller = require('../controller/index')
const router = require('express').Router()
const multer = require('multer')
var path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})
var upload = multer({ storage: storage })

router.delete("/delete/:id", controller.childController.deleteChild)
router.post("/create", controller.childController.createChild)
router.post("/upload/:id", upload.single('childPhoto'), controller.childController.uploadPhoto)

module.exports = router