const conn = require("../mysql.knex");


module.exports = {
searchForAll: async()=>{
    return await conn().select().from("usuario");
},
signUp: async(data) => {
    return await conn.insert(data).into("usuario");
},
login: async(email)=>{
    return await conn().select("email").from("usuario").where({email: email});
},
rec: async()=>{
    return await conn().select("email").from("usuario").where({email: email});
},
delete1: async(id) =>{
    return await conn("usuario").where({id:id}).del();
},
}