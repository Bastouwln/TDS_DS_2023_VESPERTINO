const express = require('express');
const {loginUsuario, listaUsuarios} = require("../controller/usuarios.controller.js");
const routes = new express.Router();

routes.get("/(:id([0-9]+))", listaUsuarios);
routes.post("/", loginUsuario);

module.exports = routes;