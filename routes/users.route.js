// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/users");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login user (implement your authentication logic here)
router.post("/login", async (req, res) => {
  try {
    // Implement login logic using passport or your preferred authentication method
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
