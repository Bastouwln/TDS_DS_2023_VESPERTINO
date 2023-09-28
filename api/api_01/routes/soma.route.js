const express = require('express');
const routes =  new express.Router();

const {soma, somaParametros} = require('../controller/soma.controller.js');

routes.get("/", soma);


routes.post("/parametros", somaParametros);



module.exports = routes;