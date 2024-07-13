const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3306;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: '', // your MySQL password
  database: 'ediacaredb' // your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL Connected...');
});

app.post('/api/patient', (req, res) => {
  const { fname, lname, dob, gender, phone, email, weight, height, insulinStatus, diabetesType, district, subDistrict } = req.body;

  db.beginTransaction((err) => {
    if (err) {
      return res.status(500).json({ message: 'Transaction error' });
    }

    const checkQuery = 'SELECT MAX(PatientID) AS maxID FROM tbl_patient';
    db.query(checkQuery, (err, result) => {
      if (err) {
        return db.rollback(() => {
          res.status(500).json({ message: 'Database error' });
        });
      }

      const newPatientID = (result[0].maxID || 0) + 1;

      const insertPatientQuery = 'INSERT INTO tbl_patient (PatientID, FName, LName, DOB, Gender, PhoneNumber, Email, Weight, Height, InsulinStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      db.query(insertPatientQuery, [newPatientID, fname, lname, dob, gender, phone, email, weight, height, insulinStatus], (err) => {
        if (err) {
          return db.rollback(() => {
            res.status(500).json({ message: 'Insert patient error' });
          });
        }

        const insertDiabetesQuery = 'INSERT INTO tbl_patient_diabetes_type (PatientID, DiabetesType) VALUES (?, ?)';
        db.query(insertDiabetesQuery, [newPatientID, diabetesType], (err) => {
          if (err) {
            return db.rollback(() => {
              res.status(500).json({ message: 'Insert diabetes type error' });
            });
          }

          const insertAddressQuery = 'INSERT INTO tbl_patient_address (PatientID, District, Sub_District) VALUES (?, ?, ?)';
          db.query(insertAddressQuery, [newPatientID, district, subDistrict], (err) => {
            if (err) {
              return db.rollback(() => {
                res.status(500).json({ message: 'Insert address error' });
              });
            }

            db.commit((err) => {
              if (err) {
                return db.rollback(() => {
                  res.status(500).json({ message: 'Commit error' });
                });
              }
              res.status(200).json({ message: 'Patient data inserted successfully' });
            });
          });
        });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
