const express = require('express');
const adminController = require('../controller/admin');

const router = express.Router();

router.post('/add-product/:productId', adminController.editProduct);
router.post('/add-product', adminController.addProduct);
router.post('/delete-product', adminController.deleteProduct);

module.exports = router;