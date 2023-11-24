// routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const Review = require("../models/reviews");

// Get review by ID
router.get("/:reviewId", async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new review
router.post("/", async (req, res) => {
  try {
    const { bookId, userId, comment, rating } = req.body;
    const newReview = new Review({ bookId, userId, comment, rating });
    await newReview.save();
    res.status(201).json({ message: "Review created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update review by ID
router.put("/:reviewId", async (req, res) => {
  try {
    const { comment, rating } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.reviewId,
      { comment, rating },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json({ message: "Review updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete review by ID
router.delete("/:reviewId", async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.reviewId);
    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
