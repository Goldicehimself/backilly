const express = require('express');
// load environment variables (used by email controller, etc.)
require('dotenv').config();

const {createProxyMiddleware} = require('http-proxy-middleware');
// database connection module is currently unused or missing
// const connectDB = require('./database/dbconnection.js');

// import the email router
const emailRouter = require('./router/email.router');

const app = express();

app.use(express.json());

const PORT = 8000;
app.use('/api/v1/emails', createProxyMiddleware({
    target: 'http://localhost:8002',
    changeOrigin: true,
}));

// mount the email router under the correct path
app.use('/api/v1/mailer', emailRouter);

// Connect to the database if needed
// connectDB();

app.listen(PORT, () => {
    console.log(`Email microservice is running on port ${PORT}`);
});