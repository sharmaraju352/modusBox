const config = require('config/variables');
const serviceSchema = require('config/schemas/service');

const validate = serviceSchema.validate(config);

const { error, value: env } = validate;
if (error) {
  throw new Error(`config validation error ${validate.error}`);
}

module.exports = {
  projectName: env.PROJECT_NAME,
  log: {
    level: env.LOG_LEVEL,
    directory: env.LOG_PATH,
  },
  port: env.PORT,
  env: env.NODE_ENV,
  baseApiUrl: env.BASE_API_URL,
  alphavantage: {
    host: env.ALPHAVANTAGE_HOST,
    apiKey: env.ALPHAVANTAGE_API_KEY,
  },
};
