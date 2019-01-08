const Sequelize = require('sequelize');


const sequelize = new Sequelize('mevn', 'root', '123',{
    host:'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

})

module.exports = sequelize;



