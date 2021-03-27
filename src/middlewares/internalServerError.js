const internalServerError = (err, req, res, next) => {
  return res.status(500).send('Internal server error');
};

module.exports = internalServerError;
