// require library
const mongoose = require('mongoose');

// Schema
const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
})
// 
const Task = mongoose.model('Task', taskSchema);

// exporting schema
module.exports = Task;