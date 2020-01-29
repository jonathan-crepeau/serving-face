// External Modules ================================== // 
const express = require('express');
const app = express();

// Internal Modules ================================== //
const PORT = process.env.PORT || 5000;

// Configuration Models ================================== //

// Middleware ================================== //

// HTML Routes ================================== //

app.get('/', (request, response) => {
    response.send(`
    <h1>Servin' Face Root Route</h1>
    `)
})

// API Routes ================================== //

// Start Server ================================== //

app.listen(PORT, () => {
    console.log(`This server is running on http://localhost:${PORT}`);
});

