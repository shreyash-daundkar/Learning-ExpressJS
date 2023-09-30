const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'defalut.html'));
})

app.listen(4000);