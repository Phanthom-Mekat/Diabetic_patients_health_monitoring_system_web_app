const express = require('express');
const router = express.Router();
const pool = require('../db');

// Route for handling patient data submission
router.post('/submit', async (req, res) => {
    const {
        fname,
        lname,
        dob,
        gender,
        phone,
        email,
        weight,
        height,
        insulinStatus,
        diabetesTypes,
        otherIllnesses,
        addresses
    } = req.body;

    let connection;

    try {
        // Start a transaction
        connection = await pool.getConnection();
        await connection.beginTransaction();

        // Insert into tbl_patient
        const [resultPatient] = await connection.query(
            `INSERT INTO tbl_patient (FName, LName, DOB, Gender, PhoneNumber, Email, Weight, Height, InsulinStatus) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [fname, lname, dob, gender, phone, email, weight, height, insulinStatus]
        );

        // Get the newly inserted PatientID
        const patientId = resultPatient.insertId;

        // Insert into tbl_patient_diabetes_type
        for (const diabetesType of diabetesTypes) {
            await connection.query(
                `INSERT INTO tbl_patient_diabetes_type (PatientID, DiabetesType) 
                VALUES (?, ?)`,
                [patientId, diabetesType]
            );
        }

        // Insert into tbl_patient_other_illness
        for (const illness of otherIllnesses) {
            await connection.query(
                `INSERT INTO tbl_patient_other_illness (PatientID, OtherIllness) 
                VALUES (?, ?)`,
                [patientId, illness]
            );
        }

        // Insert into tbl_patient_address
        for (const address of addresses) {
            await connection.query(
                `INSERT INTO tbl_patient_address (PatientID, District, Sub_District) 
                VALUES (?, ?, ?)`,
                [patientId, address.district, address.subDistrict]
            );
        }

        // Commit transaction
        await connection.commit();
        connection.release();

        res.status(200).json({ message: 'Data inserted successfully!' });
    } catch (error) {
        console.error('Error inserting data:', error);

        // Rollback transaction if any error occurs
        if (connection) {
            await connection.rollback();
            connection.release();
        }

        res.status(500).json({ error: 'Failed to insert data' });
    }
});

module.exports = router;
