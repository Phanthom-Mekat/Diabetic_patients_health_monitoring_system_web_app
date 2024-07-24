const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// Use feedback routes
app.use('/feedback', feedbackRoutes);

// Serve the HTML files based on the route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'main', 'systemAdmin', 'feedback.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Add other routes to serve other HTML files similarly
// app.get('/other', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'Frontend', 'main', 'systemAdmin', 'otherPage.html'));
// });


