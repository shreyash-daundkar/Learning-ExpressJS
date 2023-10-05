const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '9763387137', {dialect : 'mysql', host : 'localhost'});

module.exports = sequelize; 