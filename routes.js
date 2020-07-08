const router = require('express').Router()

router.use('/users', require('./routers/user'))
router.use('/stock', require('./routers/stock'))
router.use('/child', require('./routers/child'))
router.use('/address',require('./routers/address'))
module.exports = router;