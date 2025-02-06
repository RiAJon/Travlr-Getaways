const express = require("express");
const router = express.Router();

// import controllers to be routed
const tripsController = require("../controllers/trips");

// define routers
router.route("/trips").get(tripsController.tripsList);
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;