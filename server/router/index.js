const Router = require('express').Router;
const searchController = require('../controllers/search');

const router = new Router();

router.get('/flight-most-traveled-destinations', searchController.flightMostTraveledDestinations);

module.exports = router