const router = require('express').Router()
const db = require('./queries')

router.get("/users", db.getChild)
router.get("/users/:id", db.getUserById)
router.post("/users", db.createUser)
router.put("/users/:id", db.updateUser)
router.delete("/users/:id", db.deleteUser)

module.exports = router;