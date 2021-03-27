const app = require('express')();
const bodyParser = require('body-parser');

const routes = require('routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

// validation error handler
app.use((err, req, res, next) => {
  if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }
});

const port = 3000;
app.listen(port, () => console.log(`App is running on port ${port}`));
