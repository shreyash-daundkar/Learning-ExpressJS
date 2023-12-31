const Sequelize = require('sequelize');
const database = require('../util/database');

module.exports = database.define('cart', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey : true,
    },
    total : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },
});
