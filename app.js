const express = require('express');
const http = require('http');

const app = express();

app.use((req, res, next) => {
    console.log('first middelware');
    next();
});

app.use((req, res, next) => {
    console.log('second middelware');
    res.send({ "key1" : 4 });
});

app.listen(4000);