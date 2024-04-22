const Book = require('../Models/schema/bookSchema'); // Assuming your book schema is in models/book.js

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single book by id
exports.getSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, isbn, category, publicationDate, pageCount, description } = req.body;

    // Basic validation (consider using a validation library for more complex scenarios)
    if (!title || !author || !isbn) {
      return res.status(400).json({ message: 'Missing required fields: title, author, and ISBN' });
    }

    const book = new Book({
      title,
      author,
      isbn,
      category,
      publicationDate,
      pageCount,
      description,
    });

    const newBook = await book.save();
    res.status(201).json({ data: newBook });
  } catch (err) {
    console.error(err);

    // Handle potential duplicate ISBN error more specifically
    if (err.code === 11000 && err.keyValue.isbn) {
      return res.status(400).json({ message: 'Duplicate ISBN detected' });
    }

    res.status(500).json({ message: 'Server error' });
  }
};

// Update a book by id
exports.updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, isbn, category, publicationDate, pageCount, description } = req.body
    const updates = { title, author, isbn, category, publicationDate, pageCount, description } ;

    const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ data: updatedBook });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a book by id
exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
