const express = require('express');
const routes =  new express.Router();

routes.get("/", (request, response) => {

    const valor1 = 10;
    const valor2 = 20;

    const resultado = valor1 + valor2;

    response.send(`O resultado é: ${resultado}`)
});

routes.post("/parametros",(request,response) => {

    const {valor1, valor2} = request.body;
    const resultado = valor1 + valor2;

    if(!valor1){
        response.status(400).send("O Parâmetro valor1 não foi informado!");
    }else if(!valor2){
        response.status(400).send("O Parâmetro valor2 não foi informado!");
    }else{
    response.send(`O resultado da soma dos dois parâmetros é: ${resultado}`);
    }
});



module.exports = routes;