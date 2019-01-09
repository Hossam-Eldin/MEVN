const db = require('../conifg/database')
const sequelize = require('sequelize') 


const Posts = db.define('posts',{
    id: { type: sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    titel:{type:sequelize.STRING, allowNull:false},
    text: {type:sequelize.TEXT, allowNull:false},
    image:{type:sequelize.STRING, allowNull:false },
})


module.exports = Posts;