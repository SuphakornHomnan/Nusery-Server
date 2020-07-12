const controller = require('../controller/index')
const router = require('express').Router()
const multer = require('multer')
var path = require('path')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/houseMap'))
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + '.jpg')
    }
})
var upload = multer({ storage: storage })

router.post('/create', controller.addressController.createAddress)
router.put('/upload/:id', upload.single('houseMap'), controller.addressController.uploadMapPhoto)

module.exports = router