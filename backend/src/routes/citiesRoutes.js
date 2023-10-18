const express = require("express");
const postControllers = require("../controllers/cityController");
const router = express.Router();

router.route("/").post(postControllers.getCurrentWeather);

module.exports = router;
