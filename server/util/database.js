const mysql = require('mysql');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mentorship_forum',
    password: ''
});



module.exports = conn;