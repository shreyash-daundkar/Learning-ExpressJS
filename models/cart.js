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

    static async delete(id) {
        const data = await Cart.fetchCart();
        data.products.forEach(item => {
            const product = item.product;
            if(product.id === parseInt(id)) data.totalPrice -= product.price * item.quantity;
        })
        data.products = data.products.filter(item => item.product.id !== parseInt(id));
        fs.writeFile(dataPath, JSON.stringify(data) , err => {
            if(err) throw err;
        });
    }
}