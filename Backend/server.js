const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const feedbackRoutes = require('./routes/feedbackRoutes');
const inputdemographicsroute = require('./routes/inputdemographicsroute');
const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// Use  routes
//app.use('/feedback', feedbackRoutes);
app.use('/patient/submit', inputdemographicsroute);


// Serve the HTML files based on the route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'main', 'login_signup', 'login.html'));
});

/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'main', 'systemAdmin', 'feedback.html'));
}); */

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});













// Add other routes to serve other HTML files similarly
// app.get('/other', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'Frontend', 'main', 'systemAdmin', 'otherPage.html'));
// });


