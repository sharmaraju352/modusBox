const router = require('express').Router();

const config = require('config/service');
const api = require('routes/api');
const notfound = require('routes/notfound');
const health = require('routes/health');

router.use('/health', health);
router.use(config.baseApiUrl, api);
router.use('*', notfound);

module.exports = router;
