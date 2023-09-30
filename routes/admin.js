const express = require('express');
const adminController = require('../controller/admin');

const router = express.Router();

router.get('/add-product', adminController.addProductForm);
router.post('/add-product', adminController.addProduct);
router.get('/', adminController.adminPage);

module.exports = router;