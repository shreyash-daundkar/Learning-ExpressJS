const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');

const dataPath = path.join(rootDir, 'data', 'products.json');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    async save() {
        const data = await Product.fetchAll();
        this.id = data.length == 0 ? 1 : data[data.length - 1].id + 1;
        data.push(this);
        fs.writeFile(dataPath, JSON.stringify(data) , err => {
            if(err) throw err;
        });
    }

    static fetchAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(dataPath, (err, data) => {
                if(err) reject();
                try {
                    resolve(JSON.parse(data));
                } catch(e) {
                    resolve([]);
                }
            });
        });
    }

    static async productDetails(id) {
        const products = await Product.fetchAll();
        products.forEach(product => {
            if(product.id == parseInt(id)) console.log(product);
        });
    }
}