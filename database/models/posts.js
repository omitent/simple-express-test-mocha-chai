const sequelize = require('sequelize');
const db = require('../db');

const postDb = db.define('nodejs-postagens', {

  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNULL: false,
    primaryKey: true
  },
  titulo: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  descricao: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  conteudo: {
    type: sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  createdAt: {
    type: 'TIMESTAMP',
    defaultVaue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNULL: false
  },
  updatedAt: {
    type: 'TIMESTAMP',
    defaultVaue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNULL: false
  }
})

//postDb.sync({force: true}) //For create a automatic table in database
module.exports = sequelize
module.exports = postDb
