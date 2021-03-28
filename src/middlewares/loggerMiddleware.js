const logger = require('util/logger');

module.exports = (req, res, next) => {
  req.log = logger;
  next();
};
