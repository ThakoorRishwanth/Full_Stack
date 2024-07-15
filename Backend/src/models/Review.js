const {Schema, model, default: mongoose} = require('mongoose')

const reviewSchema = new Schema({
    book:{
        type:Schema.Types.ObjectId,
        ref:'Book',
        required:'true'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:'true'
    },
    rating:{
        type:Number,
        required: true
    },
    comment:{
        type:String,
        required:true
    }
})

const reviewModel = model('review', reviewSchema);

module.exports = reviewModel