// routes/delete.js

const express = require('express');
const router = express.Router();
const Product = require('../postModel');

// Route to delete a product by ID
router.delete('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    // Find the product by ID and delete it from the database
    await Product.findByIdAndDelete(productId);
    res.sendStatus(204); // Send success status with no content
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).send('Error deleting product'); // Respond with error status and message
  }
});

module.exports = router;
