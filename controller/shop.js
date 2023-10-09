const path = require('path');
const rootDir = require('../util/path');
const ProductModel = require('../models/product');

exports.shopPage = async (req, res, next) => {
    if(req.user) res.json(await req.user.getProducts());
    else res.json(await ProductModel.findAll());
}

exports.productDetails = async (req, res, next) => res.json(await ProductModel.findByPk(req.params.productId));
