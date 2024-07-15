const {connect} = require ('mongoose')
const {Sequelize} = require('sequelize')

const ConnectDb = async(url)=>{
    await connect(url)
}

const Connectsql = new Sequelize("my_node","root","12345", {
    host:"localhost",
    dialect:"mysql"
})



module.exports = {ConnectDb, Connectsql}
// module.exports = Connectsql
