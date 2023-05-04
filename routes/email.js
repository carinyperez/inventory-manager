const express = require('express');
const router = express.Router();
const sendEmail = require('../controllers/email');

// @route /email 
// @desc Send email 
// @access Public 
router.get('/', sendEmail);

module.exports = router; 