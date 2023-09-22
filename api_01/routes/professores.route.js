const express = require('express');
const routes = new express.Router();

routes.get("/", (request,response) =>{
    response.send("PROFESSORES");
});

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