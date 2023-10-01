const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const rootDir = require('./util/path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactsRouter = require('./routes/contactus');
const errorControlar = require('./controller/404');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/contactus', contactsRouter);

app.use(errorControlar.errorPage);

app.listen(4000);