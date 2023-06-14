// This script sets up a router with routes for creating, updating, deleting, and retrieving tasks. 
// The functions used to handle these requests are imported from the `todoController` file

// Importing the express module, which is a minimal and flexible Node.js web application framework.
const express = require('express');

// The Router is an object in Express that allows you to create multiple routes without creating an app for each route.
const router = express.Router();

// Importing functions from 'todoController.js' file. These functions serve as middleware in Express routing.
// These are the controllers for various operations like creating a task, updating a task, deleting a task, getting a single task and getting all tasks.
const {createTask, updateTask, deleteTask, getSingleTask, getAllTasks} = require('../controllers/todoController');

// createTask
router.route('/').post(createTask);
// updateTask
router.route('/:id').put(updateTask);
// deleteTask
router.route('/:id').delete(deleteTask);
// getSingleTask
router.route('/:id').get(getSingleTask);
// getAllTasks
router.route('/').get(getAllTasks);

// Exporting the router module to be used in other parts of the application, such as the main server file where it can be registered as middleware.
module.exports = router;
