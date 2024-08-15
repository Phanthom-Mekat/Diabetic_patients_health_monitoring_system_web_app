
const express = require('express');
const pool = require('../db');
const router = express.Router();




// Fetch all appointments for a specific doctor
router.get('/appointments', async (req, res) => {
    const { doctorId } = req.query;
    try {
        const [rows] = await db.query('SELECT * FROM tbl_appointments WHERE DoctorID = ?', [doctorId]);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete an appointment by ID
router.delete('/appointments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM tbl_appointments WHERE AppointmentID = ?', [id]);
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        console.error('Error deleting appointment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
