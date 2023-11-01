const { response } = require("express");
const {searchForAll,signUp, login} = require("../repository/usuarios.repository.js");

module.exports = {

    loginUsuario:(request,response)=>{
        const data = request.body;
        const {id} = request.params;
        const user = {
            nome:request.body.nome,
            user_name: request.body.user_name,
            senha: request.body.senha
        }
        login(id,data).then((data)=>{
            if(data === user.senha){
                response.send(data);
                }
                else{response.send({message: "Senha ou usuário incorretos"})}
        }).catch(((error)=>{
            console.log(error);
            response.status(500).send({message: "Erro ao executar login!"})
        }))
    },

    cadastrarUsuario: (request,response) => {
        const {nome,user_name,senha,email,atribuicao_id} = request.body;
    
        
        signUp({nome,user_name,senha,email,atribuicao_id}).then((data) =>{
            response.status(200).send({message: "Bem vindo!", data});
        }).catch((error) =>{
            console.log(error);
            response.status(500).send({message: "Error ao cadastrar!"});
        })
    },

    listaUsuarios:(request,response)=>{
        searchForAll().then(data=>{
            response.send(data)
        }).catch(((error)=>{
            console.log(error);
            response.status(500).send({message: "Erro ao procurar os usuários da empresa"})
        }))
    },

}
