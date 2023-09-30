const path = require('path');
const rootDir = require('../util/path');

exports.addProductForm = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.addProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin');
}

exports.adminPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
}
