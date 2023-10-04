const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');
const cartModel = require('./cart');
const db = require('../util/database');

const dataPath = path.join(rootDir, 'data', 'products.json');

module.exports = class Product {
    constructor(p) {
        this.name = p.name;
        this.price = p.price;
    }
    
    save() {
        db.execute('INSERT INTO products (name, price) VALUES (?, ?)', [this.name, this.price]);
    }

    static async fetchAll() {
        const [row, meta] = await db.execute('SELECT * FROM products');
        return row;
    }

    static async productDetails(id) {
        const [row, meta] = await db.execute(`SELECT * FROM products WHERE id = ${id} `);
        return row[0];
    }

    static async edit(id, data) {
        db.execute(`UPDATE products
                    SET name = '${data.name}', price = ${data.price}
                    WHERE id = ${id}`);
    }

    static async delete(id) {
        db.execute(`DELETE FROM products
                    WHERE id = ${id}`);
    }
}