const user = {
    id:1,
    nome:"Douglas",
    user_name:"Stouwlnia",
    senha:"123"
}

module.exports = {

    login:(request, response) =>{
        const user = request.body.user_name;
        const senha = request.body.senha;
    
        if(user == "Stouwlnia" && senha == "123"){
            response.send("Login efetuado!");
        }else if(user != "Stouwlnia" || senha != "123"){
            response.send("Senha ou username incorretos.")
        }
    },
    usuario: (request, response) =>{
        const nome = user.nome
        const username = user.user_name

        response.send(nome.toString() + " " + username.toString());
    },

}