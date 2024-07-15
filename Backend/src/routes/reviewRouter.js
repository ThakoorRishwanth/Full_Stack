const express = require('express')
const { getReviewsOfBooks } = require('../controllers/reviewController')
const reviewRouter = express.Router()

reviewRouter.get('/book/bookId',getReviewsOfBooks)

module.exports = reviewRouter