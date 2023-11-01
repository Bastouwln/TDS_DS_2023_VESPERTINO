const { response } = require("express");
const { buscaTodos, buscaAlunosPorId, inserir, atualizar, deletar } = require("../repository/alunos.repository")


module.exports = {
    listaAlunos: (request, response)=>{
         buscaTodos().then(data =>{
            response.send(data);
        }).catch(((error)=>{
            console.log(error);
            response.status(404).send({message: "Erro ao consultar os alunos"});
        }));

    },
    buscaAlunosPorID:(request,response)=>{
        const { id } = request.params;

        buscaAlunosPorId(id).then((data)=>{
            response.send(data);
        }).catch((error)=>{
            response.status(500).send({message : "Erro ao consultar o aluno por id"})
        });

        //response.send(request.params.id);
    },
    inserir: (request,response) => {
        const {nome,idade,email} = request.body;

        
        inserir({nome,idade,email}).then((data) =>{
            response.status(200).send({message: "Alunos inserido com sucesso", data});
        }).catch((error) =>{
            response.status(500).send({message: "Erro ao inserir um novo aluno"})
        })
    },

        atualizar:(request,response) =>{
        const { id } = request.params
        const data = request.body



        if(data.id){
            response.status(400).send({message: "Não é permitido enviar o parâmetro ID"})
        }

        atualizar(id,data).then((data)=>{
            response.status(200).send({message: "Aluno atualizado com sucesso!!!!"})
        }).catch((error) =>{
            response.status(500).send({message: "Erro ao atualizar aluno!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"})
        })
    },
   deletar: (request, response)=>{
    const { id } = request.params

    deletar(id).then((data =>{
        response.send({message: "Aluno deletado com sucesso!!"})
    })).catch((error)=>{
        console.log(error);
        response.status(500).send({message: "Erro ao deletar o aluno!!!!!!!!"})
    })
   },

   // listaAlunos: async(request, response) =>{
       // const data = await buscaTodos();
     //   response.send(data);
    //}
};