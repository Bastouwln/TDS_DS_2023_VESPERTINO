const express = require('express');
const alunosRoutes = require('./alunos.route');
const professoresRoutes = require('./professores.route');
const somaRoute = require('./secretaria.route');

const routes = express.Router();

routes.use("/alunos", alunosRoutes);
routes.use("/professores", professoresRoutes);
routes.use("/secretaria", somaRoute);

module.exports = routes