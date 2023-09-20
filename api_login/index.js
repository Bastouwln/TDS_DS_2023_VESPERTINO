const express = require('express');
const bodyParser = require('body-parser');
const { stringify } = require('querystring');

const app = new express();

app.use(bodyParser.json());

const usuario = {
    id:1,
    nome:"Douglas",
    user_name:"Stouwlnia",
    senha:"123"
}

app.get("/usuario", (request, response) =>{ //nao enviar id nem senha
    const user = [
        usuario.nome,
        usuario.user_name
    ]
    response.send(user.toString());
});

app.post("/login",(request, response) =>{
    const user = request.body.user_name;
    const senha = request.body.senha;

    if(user == "Stouwlnia" && senha == "123"){
        response.send("Login efetuado!");
    }else if(user != "Stouwlnia" || senha != "123"){
        response.send("Senha ou username incorretos.")
    }
});

app.listen(8080, () =>
      console.log("o servidor está rodando na porta 8080")
);