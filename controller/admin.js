const path = require('path');
const rootDir = require('../util/path');
const productModel = require('../models/product');

exports.addProduct = (req, res, next) => {
    productModel.create(req.body);
}

exports.editProduct = async (req, res, next) => {
    const product = await productModel.findByPk(req.params.productId);
    product.name = req.body.name;
    product.price = req.body.price;
    product.save();
}

exports.deleteProduct =  async (req, res, next) => {
     const product = await productModel.findByPk(req.body.id);
     product.destroy();
}

