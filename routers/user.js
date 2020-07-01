const controller = require('../controller/index')
const router = require('express').Router()

router.get("/", controller.userController.getChild)
router.get("/:id", controller.userController.getUserById)
router.post("/", controller.userController.createUser)
router.put("/:id", controller.userController.updateUser)
router.delete("/:id", controller.userController.deleteUser)

module.exports = router