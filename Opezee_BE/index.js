// index.js - Main entry point for the application

const express = require('express');
const cors = require('cors');

const router = require('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router); // Using the router for defined routes

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
