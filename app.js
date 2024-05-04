// app.js

const express = require('express');
const app = express();

// Require route files
const home = require('./routes/home');


// Use routes
app.use('/', home);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
