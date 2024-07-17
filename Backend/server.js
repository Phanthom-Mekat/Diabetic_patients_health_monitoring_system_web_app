const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 6000;

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ediacaredatabase'
};

const pool = mysql.createPool(dbConfig);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

pool.getConnection()
    .then(connection => {
        console.log('Database connection established successfully.');
        connection.release();
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });

app.get('/api/feedback', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tbl_review');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).send('Error fetching feedback');
    }
});

app.delete('/api/feedback/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM tbl_review WHERE ReviewID = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Review deleted successfully' });
        } else {
            res.status(404).send('Review not found');
        }
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).send('Error deleting review');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
