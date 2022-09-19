const sequelize = require('sequelize')
const dbConfig = require("./config/db.config");

const db = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
})

try{
    db.authenticate();
    console.log('Conexão realizada com sucesso');
}catch(err){
    console.log('Erro ao realizar a conexão com BD: ' + err);
}

module.exports = db