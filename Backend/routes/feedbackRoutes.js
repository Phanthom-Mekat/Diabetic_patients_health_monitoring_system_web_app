const express = require('express');
const pool = require('../db');

const router = express.Router();

// POST: Create a new review
router.post('/api/tbl_review', async (req, res) => {
    const { Stars, Date, Description } = req.body;

    if (!Stars || !['Y', 'N'].includes(Stars) || !Date || !Description || Description.trim() === '') {
        return res.status(400).json({ error: 'Stars, Date, and Description are required' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute('INSERT INTO tbl_review (Stars, Date, Description) VALUES (?, ?, ?)', [Stars, Date, Description]);
            res.status(201).json({ message: 'Review added successfully', id: result.insertId });
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

// GET: Retrieve all reviews
router.get('/api/tbl_review', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM tbl_review ORDER BY ReviewID DESC');
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

// PUT: Update a review by ID
router.put('/api/tbl_review/:ReviewID', async (req, res) => {
    const { ReviewID } = req.params;
    const { Stars, Date, Description } = req.body;

    if (!Stars || !['Y', 'N'].includes(Stars) || !Date || !Description || Description.trim() === '') {
        return res.status(400).json({ error: 'Stars, Date, and Description are required' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute('UPDATE tbl_review SET Stars = ?, Date = ?, Description = ? WHERE ReviewID = ?', [Stars, Date, Description, ReviewID]);
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Review not found' });
            } else {
                res.json({ message: 'Review updated successfully' });
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

// DELETE: Delete a review by ID
router.delete('/api/tbl_review/:ReviewID', async (req, res) => {
    const { ReviewID } = req.params;

    try {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute('DELETE FROM tbl_review WHERE ReviewID = ?', [ReviewID]);
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Review not found' });
            } else {
                res.json({ message: 'Review deleted successfully' });
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

module.exports = router;
