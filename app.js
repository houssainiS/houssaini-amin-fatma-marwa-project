// app.js
const connectDB = require('./db');
const Post = require('./postModel');
const express = require('express');
const app = express();
const path = require('path');
const savingRoutes = require('./routes/saving');
const deleteRoute = require('./routes/delete');
// Connect to MongoDB
connectDB();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for template files
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Use the savingRoutes router for the '/save' path
app.use('/save', savingRoutes);

// Serve static files from the 'pages' folder
app.use(express.static(path.join(__dirname, 'pages')));

// Require route files
const home = require('./routes/home');
const createPost = require('./routes/createPost');
const posts = require('./routes/posts');

// Use routes
app.use('/', home);
app.use('/create-post', createPost); // Changed the route path to '/create-post'
app.use('/posts', posts);
// Register the delete route
app.use('/delete', deleteRoute);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
