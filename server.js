// External Modules ================================== // 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Internal Modules ================================== //
const db = require('./models');
const logger = require('./middleware/logger');

// Configuration Models ================================== //
const PORT = process.env.PORT || 5000;


// Middleware ================================== //

// ANCHOR - Body Parser
app.use(bodyParser.json());

// ANCHOR - Logger
// app.use(logger);


// HTML Routes ================================== //

// ANCHOR - Root Route

app.get('/', (request, response) => {
    response.send(`
    <h1>Servin' Face Root Route</h1>
    `);
});

// ANCHOR - Signup Route

app.get('/signup', (request, response) => {
    response.send(`
    <h1>Signup Route</h1>
    `);
});

// ANCHOR Login Route

app.get('/login', (request, response) => {
    response.send(`
    <h1>Login Route</h1>
    `);
});

// ANCHOR - Profile Route

app.get('/profile', (request, response) => {
    response.send(`
    <h1>Profile Route</h1>
    `);
});

// API Routes ================================== //

// ANCHOR - GET Index Users

app.get('/api/v1/users', (request, response) => {
    db.User.find({}, (error, indexUsers) => {
        if (error) return response.status(500).json({message: 'Something is wrong. Please try again.'});
        response.status(200).json(indexUsers);
    });
});

// ANCHOR - POST Create Single user

app.post('/api/v1/users', (request, response) => {
    db.User.create(request.body, (error, createUser) => {
        if (error) return response.status(500).json({message: 'Something is wrong, try again.'});
        response.status(200).json(createUser);
    });
});

// Start Server ================================== //

app.listen(PORT, () => {
    console.log(`This server is running on http://localhost:${PORT}`);
});

