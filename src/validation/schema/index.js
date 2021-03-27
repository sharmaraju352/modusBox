const joi = require('@hapi/joi');

const timeSeries = {
  body: joi.array().items(joi.string().min(2).max(10).required()).min(1),
};

module.exports = {
  timeSeries,
};
