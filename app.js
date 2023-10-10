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

const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');
const CartItems = require('./models/cartItems');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use(async (req, res, next) => {
    req.user = await User.findByPk(1);
    next();
});

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/cart', cartRouter);

app.use(errorControlar.errorPage);

Product.belongsTo(User, {constraints : true, onDelete : 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Product.belongsToMany(Cart, {through: CartItems});
Cart.belongsToMany(Product, {through: CartItems});

createServer();

async function createServer() {
    const seq = await sequelize.sync();
    const user = await User.findByPk(1);
    user == null ? await User.create({name: 'Shreyash Daundkar', email: 'shreyashdaundkar@gamil.com'}) : user;
    const cart = await user.getCart();
    cart == null ? await user.createCart({total: 0}) : cart;
    app.listen(4000);
}
