const router = require('express').Router()

router.use('/users', require('./routers/user'))
router.use('/stock', require('./routers/stock'))
router.use('/child', require('./routers/child'))
router.use('/address', require('./routers/address'))
router.use('/father', require('./routers/father'))
router.use('/mother', require('./routers/mother'))
router.use('/custodian', require('./routers/custodian'))
module.exports = router;