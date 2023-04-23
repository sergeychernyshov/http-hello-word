const express = require("express");
const app = express();

app.use(express.json());

app.use('/', require('./routes/hello-word'));
app.use('/health-check', require('./routes/health-check'));

module.exports = app;