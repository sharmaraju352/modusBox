const app = require('express')();
const bodyParser = require('body-parser');
const config = require('config/service');
const swaggerUi = require('swagger-ui-express');
const helmet = require('helmet');
const validationError = require('middlewares/validationError');
const internalServerError = require('middlewares/internalServerError');
const loggerMiddleware = require('middlewares/loggerMiddleware');
const logger = require('util/logger');
const routes = require('routes');
const swaggerDocument = require('../swagger.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: 81920 }));

// helmet to avoid common attacks
app.use(helmet());

// swagger endpoint
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// logger middleware
app.use(loggerMiddleware);

// App routes
app.use(routes);

// validation error handler
app.use(validationError);

// internal server error handler
app.use(internalServerError);

// Don't start server in case of test env
if (config.env !== 'test') {
  app.listen(+config.port, () => logger.info(`App is running on port ${config.port}`));
}

module.exports = app;
