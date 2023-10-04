const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node-complete',
    password : '9763387137',
});

module.exports = pool.promise();