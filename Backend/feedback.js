const express = require('express');
const { app,pool } = require('./index');


app.post('/api/users', async (req, res) => {
    const { name } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute('INSERT INTO users (name) VALUES (?)', [name]);
            res.status(201).json({ message: 'User added successfully', id: result.insertId });
        } catch (dbError) {
            console.error('Database error:', dbError);
            res.status(500).json({ error: 'Database error occurred' });
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM users ORDER BY id DESC');
            res.json(rows);
        } catch (dbError) {
            console.error('Database error:', dbError);
            res.status(500).json({ error: 'Database error occurred' });
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute('UPDATE users SET name = ? WHERE id = ?', [name, id]);
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.json({ message: 'User updated successfully' });
            }
        } catch (dbError) {
            console.error('Database error:', dbError);
            res.status(500).json({ error: 'Database error occurred' });
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.json({ message: 'User deleted successfully' });
            }
        } catch (dbError) {
            console.error('Database error:', dbError);
            res.status(500).json({ error: 'Database error occurred' });
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

