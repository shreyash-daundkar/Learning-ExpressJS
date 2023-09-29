const express = require('express');

const router = express.Router();

router.post('/add-product', (req, res, next) => {
    res.send('<form action="/admin/products" method="POST"><input type="text" name="name"><input type="number" name="price"><input type="submit" value="Add Product"></form>');
});

router.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin');
});

router.get('/', (req, res, next) => {
    res.send('<h1>Welcome</h1><form action="/admin/add-product" method="POST"><input type="submit" value="Go To Add Product"></form>');
});

module.exports = router;