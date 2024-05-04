// routes/saving.js

const express = require('express');
const router = express.Router();
const Post = require('../postModel'); // Adjusted path to the Post model

// Route to handle form submission and save post to database
router.post('/create-post', (req, res) => {
  const { username, content } = req.body; // Extract username and content from form data

  // Create a new post document
  const newPost = new Post({
    username,
    content
  });

  // Save the new post to the database
  newPost.save()
    .then(() => {
      // Redirect to the home page after successful save
      console.log('saved successfully')
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error saving post:', error);
      res.status(500).send('Error saving post'); // Respond with error status and message
    });
});

module.exports = router;
