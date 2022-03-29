// require the library
const mongoose = require('mongoose');
// connecting database
mongoose.connect('mongodb://localhost/todos_db');
// aquire the connection
const db = mongoose.connection;
//on error
db.on('error', console.error.bind(console, 'error connecting to db'));
// on success
db.once('open', function(){
    console.log('Successfully connected to the database');
})
// exporting db
module.exports = db;