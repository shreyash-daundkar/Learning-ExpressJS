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
        data.push(this);
        fs.writeFile(dataPath, JSON.stringify(data) , err => {
            if(err) throw err;
            console.log("done");
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
}