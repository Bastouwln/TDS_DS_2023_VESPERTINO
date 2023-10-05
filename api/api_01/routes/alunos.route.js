const express = require('express');
const { listaAlunos, buscaAlunosPorID, inserir, atualizar,deletar } = require('../controller/alunos.controller');
const routes = new express.Router();

routes.get("/", listaAlunos);
routes.post("/", inserir);
routes.put("/(:id([0-9]+))",atualizar)
routes.delete("/(:id([0-9]+))", deletar)

routes.get("/notas",(request, response)=>{
    response.send("Alunos - Notas");
});

routes.get("/livros",(request,response) =>{
    response.send("alunos - livros");
});
routes.get("/atividades",(request,response) =>{
    response.send("alunos - atividades");
})

routes.get("/perfil",(request,response) =>{
    response.send("alunos - perfil");
});

routes.get("/(:id([0-9]+))", buscaAlunosPorID);

module.exports = routes;