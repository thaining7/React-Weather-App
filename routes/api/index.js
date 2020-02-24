const path = require('path');
const router = require('express').Router();
const weatherRoutes = require('./weather');

// Weather Route
router.use('/weather', weatherRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;
