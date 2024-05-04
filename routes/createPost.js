// routes/home.js

const express = require('express');
const path = require('path');
const router = express.Router();

// Define routes
router.get('/createPost', (req, res) => {
  console.log('in createPost');
  res.sendFile(path.join(__dirname, '../pages/create-post.html'));
});

module.exports = router;
