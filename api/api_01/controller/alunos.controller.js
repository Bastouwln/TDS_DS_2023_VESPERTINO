const { buscaTodos, buscaAlunosPorId } = require("../repository/alunos.repository")


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
        })

        //response.send(request.params.id);
    },

   // listaAlunos: async(request, response) =>{
       // const data = await buscaTodos();
     //   response.send(data);
    //}
};