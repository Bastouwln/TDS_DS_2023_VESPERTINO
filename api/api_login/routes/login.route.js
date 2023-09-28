const express = require('express');
const routes = new express.Router();

const {login, usuario} = require('../controller/login.controller');


routes.get("/usuario", usuario);
routes.post("/login", login);

module.exports = routes;