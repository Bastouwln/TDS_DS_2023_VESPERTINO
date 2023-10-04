const conn = require('../mysql.knex');

module.exports = {
    buscaTodos: async()=>{
        return await conn().select().from("alunos");
    },
    buscaAlunosPorId: async(id)=>{
        return await conn.select().from("alunos").where({id : id});
    },
};