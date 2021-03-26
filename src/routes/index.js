const router = require('express').Router();

const config = require('../config/service');
const api = require('./api');
const notfound = require('./notfound');
const health = require('./health');

router.use('/health', health);
router.use(config.baseApiUrl, api);
router.use('*', notfound);

module.exports = router;
