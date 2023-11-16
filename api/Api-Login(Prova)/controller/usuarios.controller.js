const { response } = require("express");
const {searchForAll,signUp,delete1,login,} = require("../repository/usuarios.repository.js");

module.exports = {


    loginUsuario:(request,response)=>{
        const user = {
            email:request.body.email,
            senha: request.body.senha
        }


        login(user.email).then((email)=>{
            if(user.email = email){
                response.send({message:"logado com sucesso!"})
            } else{response.send({message: "Email ou senha estão errados."})}
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
    deletarCadastro:(request,response)=>{
    const { id } = request.params

    delete1(id).then((data =>{
        response.send({message: "usuario deletado com sucesso!!"})
    })).catch((error)=>{
        console.log(error);
        response.status(500).send({message: "Erro ao deletar usuario!!!!!!!!"})
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
