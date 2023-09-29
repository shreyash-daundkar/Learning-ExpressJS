const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.post('/add-product', (req, res, next) => {
    res.send('<form action="/products" method="POST"><input type="text" name="name"><input type="number" name="price"><input type="submit" value="Add Product"></form>');
});

app.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome</h1><form action="/add-product" method="POST"><input type="submit" value="Go To Add Product"></form>');
});

app.listen(4000);