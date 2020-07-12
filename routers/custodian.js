const controller = require('../controller/index')
const router = require('express').Router()
const multer = require('multer')
var path = require('path')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/signCustodian'))
    },
    filename:  (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})
var upload = multer({ storage: storage})
router.post('/upload', controller.custodianController.createCustodian)
router.put('/upload/photo/:id', upload.single('signPhoto'),controller.custodianController.uploadPhoto )

module.exports = router