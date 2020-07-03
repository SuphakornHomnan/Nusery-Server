const controller = require('../controller/index')
const router = require('express').Router()

router.get("/", controller.userController.getChild)
router.post("/login", controller.userController.login)
router.post("/", controller.userController.createUser)
router.put("/:id", controller.userController.updateUser)
router.delete("/:id", controller.userController.deleteUser)

module.exports = router