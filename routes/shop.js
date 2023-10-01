const express = require('express');
const shopController = require('../controller/shop');

const router = express.Router();

router.get('/:productId', shopController.productDetails);

router.get('/', shopController.shopPage);

module.exports = router;