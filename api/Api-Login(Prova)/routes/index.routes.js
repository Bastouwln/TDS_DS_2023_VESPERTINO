const express = require('express');
const cadastroRoute = require('./cadastro.route.js');
const loginRoute = require('./login.route.js');
const recSenhaRoute = require('./recSenha.route.js');
const deleteUsuario = require('./delete.route.js');

const routes = express.Router();

routes.use("/cadastro", cadastroRoute);
routes.use("/login", loginRoute);
routes.use("/recSenha", recSenhaRoute);
routes.use("/delete", deleteUsuario);

module.exports = routes