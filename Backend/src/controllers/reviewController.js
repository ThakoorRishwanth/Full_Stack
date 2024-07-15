const reviewModel = require("../models/Review");
const user = require("../models/user")



exports.getReviewsOfBooks = async(req,res)=>{
    const bookId = req.params.bookId;
    try{
        const reviews = await reviewModel.find({book:bookId}).populate('user');
        res.json(reviews)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}