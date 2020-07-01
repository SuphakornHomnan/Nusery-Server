const router = require('express').Router()

router.use('/users',require('./routers/user'))
router.use("/stock",require('./routers/stock'))

module.exports = router;