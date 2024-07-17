const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;


//  connection configuration db change ur local db host user password and database name
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '', //change password after pulling the code
    database: 'ediacaredatabase'
};

// Create a connection pool for dbms

const pool = mysql.createPool(dbConfig);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


//Thats Error handling for database connection code
pool.getConnection()
    .then(connection => {
        console.log('Database connection established successfully.');
        connection.release();
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });



// Example route to test database connection
app.get('/test-db', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT 1 + 1 AS solution');
        res.json({ solution: rows[0].solution });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Database query error');
    }
});


// module export to use in other files
module.exports = { app, pool };



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});