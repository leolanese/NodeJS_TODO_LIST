// Importing express module for creating server.
const express = require('express');

// Importing dotenv module for using environment variables in the application.
const dotenv = require('dotenv');

// Importing colors module for console logging with colors.
const colors = require('colors');

// Importing morgan module, which is a HTTP request logger middleware.
const morgan = require('morgan');

// Importing built-in path module, which provides utilities for working with file and directory paths.
const path = require('path');

// Importing a custom module for routes related to 'todo' functionality.
const todoRoute = require('./routes/todo');

// Importing a custom module to connect to the MongoDB database.
const connectDB = require('./config/db');

// Using the config method of dotenv to set the path of the environment variables file.
dotenv.config({ path: './env'});

// Call the connectDB function to establish the database connection.
connectDB();

// Creating an express application.
const app = express();

// Use express's inbuilt JSON parser.
app.use(express.json())

// If the application mode is 'development', use morgan for logging HTTP requests.
if (process.env.MODE === 'development'){
    app.use(morgan('dev'))
}

// Set the port number for the server to listen on. Default is 5000 if not specified in the environment variables.
const PORT = process.env.PORT || 5000;

// Use the 'todoRoute' for handling API requests under '/api/task'.
app.use('/api/task', todoRoute);

// Route for the root ('/') of the application. When this route is hit, it sends back a message.
app.get('/', (req, res) => {
    res.send('YAY! API is running good')
});

// Start the server and listen on the specified port. Log a message to console when server starts.
app.listen(PORT, console.log(`Server is running on port: ${PORT}`.green.bold));
