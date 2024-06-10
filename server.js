// Load the express module to create an Express server.
// import {express} from 'express';
const express = require('express')

// Create an instance of the Express application.
const app = express();

// Define a route for the root URL ("/") that responds with "Hello, World!".
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Make the server listen on port 3000.
const port = 6000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
