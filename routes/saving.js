// routes/saving.js

const express = require('express');
const router = express.Router();
const Product = require('../postModel');

// Route to handle product creation form submission
router.post('/', async (req, res) => {
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
