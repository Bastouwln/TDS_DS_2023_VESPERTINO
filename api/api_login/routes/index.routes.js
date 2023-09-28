const express = require('express');
const loginRoute = require('./login.route');

const routes = express.Router();

routes.use("/", loginRoute);

module.exports = routes;