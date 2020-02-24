const router = require('express').Router();
const weatherController = require('../../controllers/weatherController');

// Matches with "/api/weather"
router
  .route('/')
  .get(weatherController.findAll);

module.exports = router;
