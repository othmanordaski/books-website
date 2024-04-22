const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  isbn: {
    type: String,
    unique: true,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  publicationDate: {
    type: Date
  },
  pageCount: {
    type: Number
  },
  description: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Book', bookSchema);
