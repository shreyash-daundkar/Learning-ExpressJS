const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactsRouter = require('./routes/contactus');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/contactus', contactsRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'defalut.html'));
})

app.listen(4000);