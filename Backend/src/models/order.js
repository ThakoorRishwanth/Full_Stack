const {Sequelize, DataTypes} = require('sequlize')
const { Connectsql } = require('../configs/db');
const user = require('./user');

const order = Connectsql.define('Order',{
    date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    total:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
})

order.belongsTo(user);

module.exports = order