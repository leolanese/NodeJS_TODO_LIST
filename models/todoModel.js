// Importing mongoose module to use its functionality for creating schemas and models.
const mongoose = require('mongoose');

// Defining a mongoose schema for 'Todo'. 
// 'Todo' has two properties - 'task' which is of type String and is required, 
// and 'active' which is of type Boolean and has a default value of true.
const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

// Creating a model 'Todo' using the 'Todo' schema. 
// This model will be used to create and read documents from the MongoDB database.
const Todo = mongoose.model('Todo', todoSchema)

// Exporting the 'Todo' model so that it can be used in other parts of the application.
module.exports = Todo
