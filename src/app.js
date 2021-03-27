const app = require('express')();
const bodyParser = require('body-parser');
const config = require('config/service');
const validationError = require('middlewares/validationError');
const internalServerError = require('middlewares/internalServerError');
const routes = require('routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

// validation error handler
app.use(validationError);

// internal server error handler
app.use(internalServerError);

// Don't start server in case of test env
if (config.env !== 'test') {
  app.listen(+config.port, () => console.log(`App is running on port ${config.port}`));
}

module.exports = app;
