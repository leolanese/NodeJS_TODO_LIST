// Importing mongoose for database operations.
const mongoose = require('mongoose');

// Importing express-async-handler, a custom middleware for handling exceptions inside asynchronous route handlers.
const asyncHandler = require('express-async-handler');

// Importing Todo model.
const Todo = require('../models/todoModel');

/**
 * This function handles a POST request to create a new task.
 * It accepts a request body with 'task' and 'active' fields and creates a new document in the database.
 * The newly created task is returned in the response body along with a success message.
 */
exports.createTask = asyncHandler(async (req, res) => {
    const {task, active} = req.body;
    const todo = await Todo.create({task, active});
    res.status(201).json({
        success: true,
        data: todo,
        message: 'Task is created successfully'
    });
});

/**
 * This function handles a PUT request to update an existing task.
 * It first finds the task with the given ID, then updates its 'task' and 'active' fields.
 * If the task is found and updated successfully, the updated task is returned in the response body.
 * If the task is not found, an error message is returned.
 */
exports.updateTask = asyncHandler(async (req, res) => {
    const {task, active} = req.body;
    const existTask = await Todo.findOne({_id : req.params.id});
    if(existTask){
        existTask.task = task;
        existTask.active = active;
        const updatedTask = await existTask.save();
        res.status(200).json({
            success: true,
            data: updatedTask,
            message: 'Task is updated successfully'
        });
    }else{
        res.status(404).json({
            success: false,
            data: null,
            message: 'Task not found'
        });
    }
});


/**
 * This function handles a DELETE request to remove an existing task.
 * If the task is found and deleted successfully, a success message is returned.
 * If the task is not found, an error message is returned.
 */
exports.deleteTask = asyncHandler(async (req, res) => {
    const existTask = await Todo.findOne({_id : req.params.id});

    if (!!existTask){
        await Todo.deleteOne({_id: existTask._id});  
        res.status(200).json({
            success: true,
            message: 'Task is deleted successfully'
        });
     }else {
        res.status(404).json({
            success: false,
            data: null,
            message: 'Task not found'
        });
    }
});


/**
 * This function handles a GET request to retrieve a single task.
 * If the task is found, it is returned in the response body.
 * If the task is not found, an error message is returned.
 */
exports.getSingleTask = asyncHandler(async (req, res) => {
    const existTask = await Todo.findOne({_id : req.params.id});

    if (!!existTask){
        res.status(200).json({
            success: true,
            data: existTask,
            message: 'Task is fetched successfully'
        });
    } else {
        res.status(404).json({
            success: false,
            data: null,
            message: 'Task not found'
        });
    }
});


/**
 * This function handles a GET request to retrieve all tasks from the database.
 * If tasks are found, they are returned in the response body along with a success message.
 * If no tasks are found, an error message is returned.
 */
exports.getAllTasks = asyncHandler(async (req, res) => {
    const allTasks = await Todo.find({});
    if(allTasks.length){
        res.status(200).json({
            success: true,
            data: allTasks,
            message: 'All tasks are fetched successfully'
        });
    }else{
        res.status(404).json({
            success: false,
            data: null,
            message: 'Tasks not found'
        });
    }
});
