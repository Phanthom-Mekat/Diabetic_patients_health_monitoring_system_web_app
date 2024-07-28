const express = require('express');
const router = express.Router();
const pool = require('../db');
const { v4: uuidv4 } = require('uuid');

// Helper function to generate a 9-digit number from a UUID
const generateNineDigitId = () => {
    const uuid = uuidv4();
    let hash = 0;
    for (let i = 0; i < uuid.length; i++) {
        hash = (hash * 31 + uuid.charCodeAt(i)) % 1000000000;
    }
    return hash.toString().padStart(9, '0');  // Ensure it's exactly 9 digits
};

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
        // Generate a 9-digit PatientID
        const patientId = generateNineDigitId();
        console.log('Generated PatientID:', patientId);  // Log the generated ID for debugging

        // Start a transaction
        connection = await pool.getConnection();
        await connection.beginTransaction();

        // Insert into tbl_patient
        await connection.query(
            `INSERT INTO tbl_patient (PatientID, FName, LName, DOB, Gender, PhoneNumber, Email, Weight, Height, InsulinStatus) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [patientId, fname, lname, dob, gender, phone, email, weight, height, insulinStatus]
        );

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

        res.status(500).json({ error: 'Failed to insert data', details: error.message, stack: error.stack });
    }
});

module.exports = router;
