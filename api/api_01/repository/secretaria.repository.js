const conn = require('../mysql.knex');


module.exports = {
    buscaTodos: async () => {
        return await conn.from('turma').innerJoin('professor', 'turma.professor_id','professor.id')
    }
}