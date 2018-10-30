const router = require("express").Router();
const parkController = require("../../controllers/parkController");

router.route("/")
    .get(parkController.find)
    .post(parkController.insert)

 module.exports = router;