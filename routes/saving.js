// routes/saving.js

const express = require('express');
const router = express.Router();
const Product = require('../postModel');

// Middleware to check for duplicate product names
async function checkDuplicateProductName(req, res, next) {
  try {
    const { name } = req.body;

    // Check if a product with the same name already exists
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      // If a product with the same name exists, send an error response
      return res.status(400).send('A product with this name already exists');
    }

    // If no product with the same name exists, proceed to the next middleware
    next();
  } catch (error) {
    console.error('Error checking duplicate product name:', error);
    res.status(500).send('Error checking duplicate product name');
  }
}

// Route to handle product creation form submission
router.post('/', checkDuplicateProductName, async (req, res) => {
  try {
    const { name, price, description } = req.body;
    
    // Create a new product instance
    const newProduct = new Product({
      name,
      price,
      description
    });

    // Save the product to the database
    await newProduct.save();

    res.redirect('/'); // Redirect to the products page after creation
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).send('Error creating product');
  }
});

module.exports = router;
