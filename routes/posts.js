// routes/posts.js

const express = require('express');
const path = require('path');
const router = express.Router();

// Define routes
router.get('/', (req, res) => { // Changed the route to '/'
  console.log('in posts');
  res.sendFile(path.join(__dirname, '../pages/posts.html'));
});

module.exports = router;
