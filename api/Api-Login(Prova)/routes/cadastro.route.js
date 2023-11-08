const express = require('express');
const {listaUsuarios, cadastrarUsuario, /*deletarCadastro*/} = require("../controller/usuarios.controller.js");
const routes = new express.Router();

routes.get("/", listaUsuarios);
routes.post("/cadastrar", cadastrarUsuario);
routes.delete("/cadastrar/(:id([0-9]+))", /*deletarCadastro*/);

module.exports = routes;