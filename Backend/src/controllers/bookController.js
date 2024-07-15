const bookModel = require("../models/Book")

exports.getAllBooks = async(req,res)=>{
    try{
        const books = await bookModel.find();
        res.json(books)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}