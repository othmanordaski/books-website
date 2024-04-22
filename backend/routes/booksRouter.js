const express = require('express');

const router = express.Router();

const { getAllBooks, getSingleBook ,createBook, updateBook, deleteBook } = require('../Controllers/booksController');
// Define your routes here
router.route('/')
.get(getAllBooks)
.post(createBook);
router.route('/:id')
.get(getSingleBook)
.patch(updateBook)
.delete(deleteBook);
module.exports = router;