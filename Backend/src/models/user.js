const {Sequelize, DataTypes} = require('sequelize')
const { Connectsql } = require('../configs/db')

const user = Connectsql.define('User',{
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:'user',
    },
})

module.exports = user