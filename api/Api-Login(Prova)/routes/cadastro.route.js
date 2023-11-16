const express = require('express');
const {listaUsuarios, cadastrarUsuario, deletarCadastro} = require("../controller/usuarios.controller.js");
const routes = new express.Router();

routes.get("/", listaUsuarios);
routes.post("/cadastrar", cadastrarUsuario);
routes.delete("/cadastrar/(:id([0-9]+))", deletarCadastro);

module.exports = routes;

//get http://localhost:8080/cadastro (ver usuarios)
//delete http://localhost:8080/cadastro/cadastrar/(id)
// post http://localhost:8080/cadastro/cadastrar (arquivo jason)