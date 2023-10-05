const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const rootDir = require('./util/path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const cartRouter = require('./routes/cart');
const errorControlar = require('./controller/404');
const sequelize = require('./util/database');
const User = require('./models/user')
const Product = require('./models/product')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/cart', cartRouter);

app.use(errorControlar.errorPage);

Product.belongsTo(User, {constraints : true, onDelete : 'CASCADE'});
User.hasMany(Product);

sequelize.sync({force : true})
 .then(() => { 
     app.listen(4000);
 })
.catch(err => {
    console.log(err);
})

