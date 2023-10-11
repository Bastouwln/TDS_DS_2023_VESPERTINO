const {response} = require('express');
const {buscaTodosProfessor, atualizarProfessor, inserirProfessor, deletarProfessor} = require('../repository/professor.repository');

module.exports = {
    listaProfessor: (request, response)=>{
        buscaTodosProfessor().then(data =>{
           response.send(data);
       }).catch(((error)=>{
           console.log(error);
           response.status(404).send({message: "erro procurando os professores"});
       }));
    },
    buscaProfessorID:(request,response)=>{
        const { id } = request.params;

        buscaProfessorID(id).then((data)=>{
            response.send(data);
        }).catch((error)=>{
            response.status(500).send({message : "erro ao procurar professores"})
        });
    },
    inserirProfessor: (request,response) => {
        const {nome,materia} = request.body;

        
        inserirProfessor({nome,materia}).then((data) =>{
            response.status(200).send({message: "professor adentrado sim", data});
        }).catch((error) =>{
            response.status(500).send({message: "no professor no"})
        })
    },

    atualizarProfessor:(request,response) =>{
        const { id } = request.params
        const data = request.body



        if(data.id){
            response.status(400).send({message: "nao envia id nao em"})
        }

        atualizarProfessor(id,data).then((data)=>{
            response.status(200).send({message: "eba atualizo seu pf!!!!!!!oifjknmdnjgposrilkmrouij"})
        }).catch((error) =>{
            response.status(500).send({message: "deu erro no professor"})
        })
    },
   deletarProfessor: (request, response)=>{
    const { id } = request.params

    deletarProfessor(id).then((data =>{
        response.send({message: "professor evaporo"})
    })).catch((error)=>{
        console.log(error);
        response.status(500).send({message: "ih, não deu pra evaporar o professor"})
    })
   },

}