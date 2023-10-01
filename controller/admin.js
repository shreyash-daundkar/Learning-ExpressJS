const path = require('path');
const rootDir = require('../util/path');
const productModel = require('../models/product');

exports.addProductForm = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.addProduct = (req, res, next) => {
    const product = new productModel(req.body.title);
    product.save();
    res.redirect('/admin');
}

exports.adminPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
}
