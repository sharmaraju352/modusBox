const joi = require('@hapi/joi');

const defaultSchema = joi
  .object({
    PROJECT_NAME: joi.string().required(),
    LOG_LEVEL: joi.string().valid('fatal', 'error', 'warn', 'info', 'debug').default('debug'),
    LOG_PATH: joi.string().required(),
  })
  .unknown()
  .required();

module.exports = defaultSchema;
