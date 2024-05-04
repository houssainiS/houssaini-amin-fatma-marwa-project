// routes/posts.js

const express = require('express');
const router = express.Router();
const Post = require('../postModel');

// Route to retrieve all posts from the database
router.get('/', (req, res) => {
  // Find all posts in the database
  Post.find()
    .then(posts => {
      if (posts.length === 0) {
        return res.status(404).send('No posts found');
      }
      res.render('posts', { posts }); // Render the 'posts' template with the posts data
    })
    .catch(error => {
      console.error('Error retrieving posts:', error);
      res.status(500).send('Error retrieving posts');
    });
});

module.exports = router;
