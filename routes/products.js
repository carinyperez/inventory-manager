
const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts,getProduct, updateProduct, deleteProduct} = require('../controllers/products');


// @route /api/v1/products
// @desc Get all products
// @access Public
router.get('/', getAllProducts)


// @route /api/v1/products/id
router.get('/:id', getProduct)

// @route /api/v1/products
// @desc Create a product 
// @access Public 
router.post('/', createProduct)

// @route /api/v1/products/:id
// @desc Update a product using the id 
// @access Public
router.patch('/:id', updateProduct)


// @route /api/v1/products/:id
// @desc Delete product using the id 
// @access Public
router.delete('/:id', deleteProduct)


module.exports = router; 