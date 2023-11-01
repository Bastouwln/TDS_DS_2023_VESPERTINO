const conn = require("../mysql.knex");


module.exports = {
searchForAll: async()=>{
    return await conn().select().from("usuario");
},

signUp: async(data) => {
    return await conn.insert(data).into("usuario");
},
login: async(id,data)=>{
    return await conn("usuario").update(data).where({id:id});
},

}