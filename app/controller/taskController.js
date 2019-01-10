'use strict';

var Task = require('../model/taskModel.js');

exports.gettasks = function(req, res) {
  Task.getAllTask(function(err, task) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};



exports.createtask = function(req, res) {
  var new_task = new Task(req.body);

  //handles null error 
   if(!new_task.task || !new_task.status){
            res.status(400).send({ error:true, message: 'Please provide task/status' });
        }
else{
  
  Task.createTask(new_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
}
};


exports.gettask = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.updatetask = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.deletetask = function(req, res) {
  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};