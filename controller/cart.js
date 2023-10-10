const CartController = require('../models/cart');
const cartItems = require('../models/cartItems');
const ProductController = require('../models/product');

exports.displayCart = async(req, res, next) => {
    const cart = await req.user.getCart();
    const products = await cart.getProducts();
    const total = await cart.total;
    res.json({products, total});
}

exports.addProduct = async (req, res, next) => {
    const product = await ProductController.findByPk(req.body.id);
    const cart = await req.user.getCart();
    let cartProd = await getProduct(cart, req.body.id);
    if(!cartProd) {
        const res = await cart.addProduct(product, {through : {quantity: 0}})
        cartProd = await getProduct(cart, req.body.id);
    }
    cartProd.cartItems.quantity++;
    cartProd.cartItems.save();
    cart.total += cartProd.price;
    cart.save();
}

exports.deleteProduct = async (req, res, next) => {
    const cart = await req.user.getCart();
    const cartProd = await getProduct(cart, req.body.id);
    cart.total -= cartProd.price;
    cart.save();
    cartProd.cartItems.destroy();
}

async function getProduct(cart, id) {
    const existProd = await cart.getProducts({where: {id}});
    return existProd[0];
}