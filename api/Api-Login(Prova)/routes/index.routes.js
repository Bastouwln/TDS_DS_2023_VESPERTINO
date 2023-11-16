const express = require('express');
const cadastroRoute = require('./cadastro.route.js');
const loginRoute = require('./login.route.js');
const recSenhaRoute = require('./recSenha.route.js');

const routes = express.Router();

routes.use("/cadastro", cadastroRoute);
routes.use("/login", loginRoute);
routes.use("/recSenha", recSenhaRoute);

module.exports = routes