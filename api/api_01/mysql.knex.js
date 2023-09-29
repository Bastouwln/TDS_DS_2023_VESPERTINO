const knex = require('knex');


module.exports = {
    client:"mysql",
    connection:{
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "apiDB",

    }
};