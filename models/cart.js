const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');

const dataPath = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    constructor(p) {
        this.product = p;
    }
    
    async save() {
        const cart = await Cart.fetchCart();
        const products = cart.products;
        let newProduct = true;
        products.forEach(data => {
            if(data.product.id === this.product.id) {
                data.quantity = parseInt(data.quantity) + 1;
                newProduct = false;
            }
        });
        if(newProduct) {
            this.quantity = 1;
            products.push(this);
        }
        cart.totalPrice += parseInt(this.product.price);
        fs.writeFile(dataPath, JSON.stringify(cart), err => {
            if(err) throw err;
        });
    }

    static fetchCart() {
        return new Promise((resolve, reject) => {
            fs.readFile(dataPath, (err, data) => {
                if(err) reject();
                try {
                    resolve(JSON.parse(data));
                } catch(e) {
                    const newData = {
                        products : [],
                        totalPrice : 0,
                    }
                    resolve(newData);
                }
            });
        });
    }
}