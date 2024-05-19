// routes/edit.js
const express = require('express');
const router = express.Router();
const Product = require('../postModel');

// Route to serve the edit product form
router.get('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('edit-product', { product });
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).send('Error retrieving product');
  }
});

// Route to handle the form submission and update the product
router.post('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name, price, description } = req.body;
    await Product.findByIdAndUpdate(productId, { name, price, description });
    res.redirect('/posts');
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).send('Error updating product');
  }
});

module.exports = router;
