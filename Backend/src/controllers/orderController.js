const order = require("../models/order");



exports.getOrderByUser = async(req,res)=>{
    const userId = req.params.userId;
    try{
        const orders = await order.findAll({where:{userId: userId},include:['user']});
        res.json(orders)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}