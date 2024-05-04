// routes/delete.js

const express = require('express');
const router = express.Router();
const Post = require('../postModel');

// Route to delete a post by ID
router.delete('/:postId', async (req, res) => {
  const postId = req.params.postId;
  try {
    // Find the post by ID and delete it from the database
    await Post.findByIdAndDelete(postId);
    res.sendStatus(204); // Send success status with no content
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).send('Error deleting post'); // Respond with error status and message
  }
});

module.exports = router;
