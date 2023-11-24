const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const booksRouter = require("./routes/books.route");
const reviewsRouter = require("./routes/reviews.route");
const usersRouter = require("./routes/users.route");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/books", booksRouter);
app.use("/reviews", reviewsRouter);
app.use("/users", usersRouter);

const mongoURI = "mongodb://localhost:27017/test";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// Define your MongoDB models (Book, User, Review)

// Define routes for each feature (books, users, reviews)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
