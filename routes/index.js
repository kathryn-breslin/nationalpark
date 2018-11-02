const path = require("path");
const router = require("express").Router();
const parkRoutes= require("./parks");
const userRoutes = require("./user");

router.use("/api", parkRoutes);
router.use("/api", userRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;