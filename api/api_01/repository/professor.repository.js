const conn = require('../mysql.knex');

module.exports = {
    buscaTodosProfessor: async() => {
        return await conn().select().from('professor');
    },
    inserirProfessor: async(data) => {
        return await conn.insert(data).into("professor");
    },
    atualizarProfessor: async(id, data) =>{
        return await conn("professor").update(data).where({id:id})
    },
    deletarProfessor: async(id) =>{
        return await conn("professor").where({id:id}).del()
    },

}