// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/api/movies', (req, res) => {
    res.json([
        { id: 1, title: 'Inception', year: 2010 },
        { id: 2, title: 'The Matrix', year: 1999 }
    ]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
