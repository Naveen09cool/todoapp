const Task = require('../models/task');

module.exports.home = function(req, res){
    Task.find({}, function(err,task){
        if(err){
            console.log('Error fetching task');
            return;
        }
        return res.render('home',{
            title: "HOME",
            task: task
        })
    })
}
module.exports.create_task = function(req, res){
    // Creating Task
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err, newTask){
        if(err){
            console.log('Error creating task',err);
            return;
        }
        return res.redirect('back');
    })
}

module.exports.delete_task = function(req, res){
    var id = req.query;
    //check no. of tasks to be deleted
    var count = Object.keys(id).length;
    for(let i=0; i<count; i++){
        Task.findByIdAndDelete(Object.keys(id)[i], function(err){
            if(err){
                console.log('Error deleting task',err);
            }
        })
    }
    console.log("deleted")
    return res.redirect('back');
}