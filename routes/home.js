// routes/home.js

const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('in home');
});



module.exports = router;
