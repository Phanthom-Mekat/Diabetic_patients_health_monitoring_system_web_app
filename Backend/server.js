const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const feedbackRoutes = require('./routes/feedbackRoutes');
const inputdemographicsroute = require('./routes/inputdemographicsroute');
const doctorAppointmentRoutes = require('./routes/doctorAppointmentRoutes');

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// Use routes
app.use('/feedback', feedbackRoutes);
app.use('/DemographicsSubmit', inputdemographicsroute);
app.use('/appointments', doctorAppointmentRoutes);

// Serve HTML files at specific routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'index.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'login.html'));
});

app.get('/feedback.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'feedback.html'));
});

app.get('/doctor_appointments.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'doctor_appointments.html'));
});

// Add other routes as needed

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
