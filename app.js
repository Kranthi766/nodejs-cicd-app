const express = require('express');
const app = express();

/**
 * Home route
 * This is the main application URL
 */
app.get('/', (req, res) => {
  res.send('🚀 Version4: Auto-deployed by kiran  via CI/CD!');
});

/**
 * Health check route
 * Used by monitoring & CI/CD pipelines
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    app: 'nodejs-app',
    server: 'AWS EC2',
    timestamp: new Date()
  });
});

/**
 * Application port
 */
const PORT = 3000;

/**
 * Start the server
 */
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
