const mysql = require('mysql2/promise');

// Database connection configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ediacaredatabase'
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

module.exports = pool;
