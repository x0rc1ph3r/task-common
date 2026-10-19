// Loads environment values, connects MongoDB, and starts the HTTP server.
require('dotenv').config();
const app = require('./app');
const connectDatabase = require('./config/db');

const port = process.env.PORT || 5002;
connectDatabase()
  .then(() => app.listen(port, () => console.log(`API running at http://localhost:${port}`)))
  .catch((error) => {
    console.error(`Startup failed: ${error.message}`);
    process.exit(1);
  });
