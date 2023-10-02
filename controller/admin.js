const path = require('path');
const rootDir = require('../util/path');
const productModel = require('../models/product');

exports.addProduct = (req, res, next) => {
    const product = new productModel(req.body);
    product.save();
}

exports.editProduct = (req, res, next) => {
    productModel.edit(req.params.productId, req.body);
}

exports.deleteProduct = (req, res, next) => {
    productModel.delete(req.body.id);
}

