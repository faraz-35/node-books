// routes/books.js
const express = require("express");
const router = express.Router();
const Book = require("../models/books");

// Task 1: Get the book list available in the shop - 2 Points
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Task 2: Get the books based on ISBN - 2 Points
router.get("/isbn/:isbn", async (req, res) => {
  try {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Task 3: Get all books by Author - 2 Points
router.get("/author/:author", async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.author });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Task 4: Get all books based on Title - 2 Points
router.get("/title/:title", async (req, res) => {
  try {
    const books = await Book.find({ title: req.params.title });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Task 5: Get book Review - 2 Points
router.get("/:id/reviews", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book.reviews);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
