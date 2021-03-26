const router = require('express').Router();
const timeSeries = require('./timeSeries');

router.use('/time-series', timeSeries);

module.exports = router;
