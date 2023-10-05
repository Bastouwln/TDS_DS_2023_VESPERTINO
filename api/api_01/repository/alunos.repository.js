const conn = require('../mysql.knex');

module.exports = {
    buscaTodos: async()=>{
        return await conn().select().from("alunos");
        //select * from alunos
    },
    buscaAlunosPorId: async(id)=>{
        return await conn.select().from("alunos").where({id : id});
        //select * from alunos where id = 3
    },
    inserir: async(data) => {
        return await conn.insert(data).into("alunos");

        //insert into alunos (id, nome, idade, email) values (NULL "guilherme" "23" "guilherme.pires@archansistemas.com.br") 
    },
    atualizar: async(id, data) =>{
        return await conn("alunos").update(data).where({id:id})

    //update alunos set(email) values("teste@gmai.com") where id = 1
    },
    deletar: async(id) =>{
        return await conn("alunos").where({id:id}).del()
        //delete from alunos where id = 3
    },
};