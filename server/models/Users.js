const db = require('../conifg/database')

const Sequelize = require('sequelize')

const User = db.define('users', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, },
    email:{type:Sequelize.STRING, allowNull:false, unique: true},
    password:{type: Sequelize.STRING, allowNull:false},
    avatar:{type: Sequelize.STRING, allowNull:true}
})

module.exports = User;