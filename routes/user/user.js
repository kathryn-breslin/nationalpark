const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.find)
    .post(userController.insert)

router.route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove)

module.exports = router;
