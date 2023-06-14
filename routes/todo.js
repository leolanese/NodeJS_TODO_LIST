// This script sets up a router with routes for creating, updating, deleting, and retrieving tasks. The functions used to handle these requests are imported from the `todoController` file.

// Importing the express module, which is a minimal and flexible Node.js web application framework.
const express = require('express');

// The Router is an object in Express that allows you to create multiple routes without creating an app for each route.
const router = express.Router();

// Importing functions from 'todoController.js' file. These functions serve as middleware in Express routing.
// These are the controllers for various operations like creating a task, updating a task, deleting a task, getting a single task and getting all tasks.
const {createTask, updateTask, deleteTask, getSingleTask, getAllTasks} = require('../controllers/todoController');

// A post request to the root of the router. This route is used to create a new task using the createTask function from the controllers.
router.route('/').post(createTask);

// A put request to the '/:id' route of the router. This route is used to update an existing task using the updateTask function from the controllers.
// ':id' is a route parameter, allowing you to pass in an id to the route (e.g., /api/task/123).
router.route('/:id').put(updateTask);

// A delete request to the '/:id' route of the router. This route is used to delete an existing task using the deleteTask function from the controllers.
router.route('/:id').delete(deleteTask);

// A get request to the '/:id' route of the router. This route is used to get a single task using the getSingleTask function from the controllers.
router.route('/:id').get(getSingleTask);

// A get request to the root of the router. This route is used to get all tasks using the getAllTasks function from the controllers.
router.route('/').get(getAllTasks);

// Exporting the router module to be used in other parts of the application, such as the main server file where it can be registered as middleware.
module.exports = router;
