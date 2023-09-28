const express = require('express');
const routes = new express.Router();

routes.get("/", (request,response) =>{
    response.send("ALUNOS");
});

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

module.exports = routes;