const router = require('express').Router();

router.get('/test', (req, res) => res.send('Time Series is working'));

module.exports = router;
