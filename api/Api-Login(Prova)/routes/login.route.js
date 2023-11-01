const express = require('express');
const {loginUsuario, listaUsuarios} = require("../controller/usuarios.controller.js");
const routes = new express.Router();

routes.get("/", listaUsuarios);
routes.post("/(:id([0-9]+))", loginUsuario);

module.exports = routes;