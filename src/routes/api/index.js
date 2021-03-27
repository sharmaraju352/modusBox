const router = require('express').Router();
const alphavantage = require('routes/api/alphavantage');

router.use('/alphavantage', alphavantage);

module.exports = router;
