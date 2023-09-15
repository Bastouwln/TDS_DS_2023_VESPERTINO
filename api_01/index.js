const express = require('express');
const bodyParse = require('express').bodyParser;
const app = new express();



app.get("/alunos",(request, response)=>{
    response.send("Alunos");
});

app.get("/professores", (request, response) => {
    response.send("Professores");
});

app.get("/soma", (request, response) => {

    const valor1 = 10;
    const valor2 = 20;

    const resultado = valor1 + valor2;

    response.send(`O resultado é: ${resultado}`)
});

app.post("/soma_parametros",(request,response) => {
    const valor1 = request.body.valor1;
    const valor2 = request.body.valor2;
    const resultado = valor1 + valor2;

    response.send(`O resultado da soma dos dois parâmetros é: ${resultado}`);
});

app.get("minharota")

app.listen(8080, () =>
        console.log("o servidor está rodando na porta 8080")
);