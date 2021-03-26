const joi = require('@hapi/joi');
const defaultSchema = require('./default');

const serviceSchema = defaultSchema.append({
  NODE_ENV: joi.string().valid('test', 'development', 'production').default('development'),
  PORT: joi.number().default(3000),
  SWAGGER_PORT: joi.number().default(3001),
  BASE_API_URL: joi.string().default(''),
  ALPHAVANTAGE_HOST: joi.string().required(),
  ALPHAVANTAGE_API_KEY: joi.string().required(),
});

module.exports = serviceSchema;
