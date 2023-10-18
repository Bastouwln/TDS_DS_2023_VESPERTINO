const { buscaTodos } = require("../repository/secretaria.repository.js")

module.exports = {
    buscaTodos: (request,response) => {
        buscaTodos().then(data => {
            response.send(data);
        }).catch(((error) =>{
            console.log(error);
            response.status(500).send({message:"error!"})
        }));
    }
}