// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like HTML, CSS)
app.use(express.static('public'));

app.post('/submit-diagnosis', (req, res) => {
    const { testName, testType, testResult, testSummary, diagnosisDate, observations, testItems } = req.body;

    const diagnosisId = 20000011;  // Assuming this is a constant for the example
    const patientId = 20000011;    // Assuming this is a constant for the example
    const diagnosisTestId = 20000009; // Assuming this is a constant for the example

    const diagnosisQuery = `
        INSERT INTO tbl_diagnosis_record (DiagnosisID, Date, ResultSummary, PatientId)
        VALUES (?, ?, ?, ?)
    `;
    const observationQuery = `
        INSERT INTO tbl_diagnosis_record_observation (DiagnosisID, Observation)
        VALUES (?, ?)
    `;
    const resultQuery = `
        INSERT INTO tbl_diagnosis_record_result (DiagnosisID, TestResult)
        VALUES (?, ?)
    `;
    const testInsertQuery = `
        INSERT INTO tbl_diagnosis_test (DiagnosisTestID)
        VALUES (?)
    `;
    const testNameQuery = `
        INSERT INTO tbl_diagnosis_test_test_name (DiagnosisTestID, TestName)
        VALUES (?, ?)
    `;
    const testTypeQuery = `
        INSERT INTO tbl_diagnosis_test_test_type (DiagnosisTestID, TestType)
        VALUES (?, ?)
    `;

    db.query(diagnosisQuery, [diagnosisId, diagnosisDate, testSummary, patientId], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        db.query(observationQuery, [diagnosisId, observations], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            db.query(resultQuery, [diagnosisId, testResult], (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                db.query(testInsertQuery, [diagnosisTestId], (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    db.query(testNameQuery, [diagnosisTestId, testName], (err, result) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        db.query(testTypeQuery, [diagnosisTestId, testType], (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            const testItemQueries = (testItems || []).map(item => {
                                return new Promise((resolve, reject) => {
                                    const testItemQuery = `
                                        INSERT INTO tbl_diagnosis_record_test_item (DiagnosisID, TestItem)
                                        VALUES (?, ?)
                                    `;
                                    db.query(testItemQuery, [diagnosisId, item], (err, result) => {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            resolve(result);
                                        }
                                    });
                                });
                            });

                            Promise.all(testItemQueries)
                                .then(() => {
                                    res.send('Diagnosis record saved successfully!');
                                })
                                .catch(err => {
                                    res.status(500).send(err);
                                });
                        });
                    });
                });
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
