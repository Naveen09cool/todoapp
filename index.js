// For setting up express Server 
const express = require('express');
// for setting port number 
const port = 8000;
// importing DB
const db = require('./config/mongoose');
// importing schema
// const Task = require('./models/task');
// using express
const app = express();
// for static file
app.use(express.static('./assets'));
//for using encrypted data
app.use(express.urlencoded());
//for view engine
app.set('view engine', 'ejs');
app.set('views','./views');
//for routes
app.use('/',require('./routes/home'))

app.listen(port, function(err){
    if(err){
        console.log(`Error in server running : ${err}`);
    }
    console.log(`Yeh, server running : ${port}`);
});