const CartController = require('../models/cart');
const ProductController = require('../models/product');

exports.displayCart = async(req, res, next) => {
    res.json(await CartController.fetchCart());
}

exports.addProduct = async (req, res, next) => {
    const product = await ProductController.productDetails(req.body.id);
    const cartItem = new CartController(product);
    cartItem.save();
}