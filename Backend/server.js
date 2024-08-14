const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const feedbackRoutes = require('./routes/feedbackRoutes');
const inputdemographicsroute = require('./routes/inputdemographicsroute');
const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// Use routes
app.use('/feedback', feedbackRoutes);
app.use('/DemographicsSubmit', inputdemographicsroute);

// Serve index.html at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'index.html'));
});

// Serve login.html at the login route
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'login.html'));
});

// Serve feedback.html at the feedback route
app.get('/feedback.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'feedback.html'));
});

// Add other routes as needed

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
