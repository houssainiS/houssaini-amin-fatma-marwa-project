// app.js

const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'pages' folder
app.use(express.static(path.join(__dirname, 'pages')));

// Require route files
const home = require('./routes/home');
const createPost = require('./routes/createPost');

// Use routes
app.use('/', home);
app.use('/create-post', createPost); // Changed the route path to '/create-post'

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
