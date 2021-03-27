const validationError = (err, req, res, next) => {
  if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }
  next(err);
};

module.exports = validationError;
