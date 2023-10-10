const Sequelize = require('sequelize');
const database = require('../util/database');

module.exports = database.define('cartItems', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey : true,
    },
    quantity : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },
});