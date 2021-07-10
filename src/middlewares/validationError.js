const validationError = (err, req, res, next) => {
  if (err.isBoom) {
    // req.log.info('Request body validation failed for ', req.body);
    return res.status(err.output.statusCode).json(err.output.payload);
  }
  next(err);
};

module.exports = validationError;
