const app = require('express')();
const routes = require('./routes');

app.use(routes);

const port = 3000;
app.listen(port, () => console.log(`App is unning on port ${port}`));
