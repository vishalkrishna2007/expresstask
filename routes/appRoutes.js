'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.getAllTask)
    .post(todoList.createTask);
   
   app.route('/tasks/:taskId')
    .get(todoList.getTaskById)
    .put(todoList.updateById)
    .delete(todoList.delete);
};