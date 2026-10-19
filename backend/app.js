// Assembles Express middleware, health check, routes, and error handling.
const express = require('express');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/items', itemRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
