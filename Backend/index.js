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
    password: 'mekat', //change password after pulling the code
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


// module export to use in other files
module.exports = { app, pool };

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'main', 'systemAdmin', 'feedback.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


