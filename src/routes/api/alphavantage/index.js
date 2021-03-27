const router = require('express').Router();
const timeSeries = require('routes/api/alphavantage/timeSeries');

router.use('/time-series', timeSeries.router);

module.exports = router;
