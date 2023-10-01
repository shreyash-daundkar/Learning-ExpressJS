const path = require('path');
const rootDir = require('../util/path');
const ProductModel = require('../models/product');

exports.shopPage = async (req, res, next) => {
    console.log(await ProductModel.fetchAll());
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

exports.productDetails = async (req, res, next) => {
    await ProductModel.productDetails(req.params.productId);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}