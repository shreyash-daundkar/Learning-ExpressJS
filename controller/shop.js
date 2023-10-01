const path = require('path');
const rootDir = require('../util/path');
const ProductModel = require('../models/product');

exports.shopPage = async (req, res, next) => {
    res.json(await ProductModel.fetchAll());
}

exports.productDetails = async (req, res, next) => {
    res.json(await ProductModel.productDetails(req.params.productId));
}
