// routes/home.js

const express = require('express');
const path = require('path');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  console.log('in home');
  res.sendFile(path.join(__dirname, '../pages/home.html'));
});

module.exports = router;
