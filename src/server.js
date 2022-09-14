const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./routes');
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
app.use((req, res) => {
  res.status(404).send({ status: 404, message: 'Not Found' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});