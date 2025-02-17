const express = require("express");
const router = express.Router();

// import controllers to be routed
const tripsController = require("../controllers/trips");

// define route for trips endpoint 
router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

// define route for tripsFindByCode endpoint
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;