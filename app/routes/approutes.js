'use strict';
module.exports = function(app) {
  var todoList = require('../controller/taskController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.gettasks)
    .post(todoList.createtask);
   
  app.route('/tasks/:taskId')
    .get(todoList.gettask)
    .put(todoList.updatetask)
    .delete(todoList.deletetask);
  };
