// External Modules ================================== // 
const express = require('express');
const app = express();

// Internal Modules ================================== //
const PORT = process.env.PORT || 5000;

// Configuration Models ================================== //

// Middleware ================================== //

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

// Start Server ================================== //

app.listen(PORT, () => {
    console.log(`This server is running on http://localhost:${PORT}`);
});

