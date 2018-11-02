const router = require("express").Router();
const parkController = require("../../controllers/parkController");

router.route("/")
    .get(parkController.findAll)
    .post(parkController.create)

router.route("/:id")
    .get(parkController.findById)
    .put(parkController.update)
    .delete(parkController.remove)

module.exports = router;