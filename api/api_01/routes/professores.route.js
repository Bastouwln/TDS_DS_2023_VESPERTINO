const express = require('express');
const {listaProfessor, atualizarProfessor, deletarProfessor, inserirProfessor } = require('../controller/professor.controller');
const routes = new express.Router();

routes.get("/", listaProfessor);
routes.post("/", inserirProfessor);
routes.put("/(:id([0-9]+))",atualizarProfessor)
routes.delete("/(:id([0-9]+))", deletarProfessor)

routes.get("/atividades",(request, response)=>{
    response.send("professores - atividades");
});

routes.get("/material",(request,response) =>{
    response.send("professor - materia");
});
routes.get("/notas",(request,response) =>{
    response.send("professores - notas");
})

module.exports = routes;