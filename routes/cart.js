const express = require('express');
const cartController = require('../controller/cart');

const router = express.Router();

router.get('/', cartController.displayCart);
router.post('/add-product', cartController.addProduct);

module.exports = router;