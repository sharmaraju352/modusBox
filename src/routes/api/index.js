const router = require('express').Router();
const alphavantage = require('./alphavantage');

router.use('/alphavantage', alphavantage);

module.exports = router;
