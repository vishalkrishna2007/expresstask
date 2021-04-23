'use strict';
var Task = require('../model/appModel.js');

exports.getAllTask = function(req, res) {
  Task.getAllTask(req.query.page, req.query.perpage, function(err, task) {
    if (err)
      res.send(err);
      
    console.log('res', task);
    res.send(task);
  });
};

exports.createTask = function(req, res) {
  var new_task = new Task(req.body);

  if(!new_task.task || !new_task.status){
    res.status(400).send({ error:true, message: 'Please provide task/status' });
  }
  else {  
    Task.createTask(new_task, function(err, task) {    
      if (err)
        res.send(err);

      res.json(task);
    });
  }
};

exports.getTaskById = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    
    res.json(task);
  });
};

exports.updateById = function(req, res) {
  var new_task = new Task(req.body);

  if(!new_task.task || !new_task.status){
    res.status(400).send({ error:true, message: 'Please provide task/status' });
  }
  else { 
    Task.updateById(req.params.taskId, new_task, function(err, task) {
      if (err)
        res.send(err);
  
      res.json(task);
    });
  }
};

exports.delete = function(req, res) {
  Task.delete( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);

    res.json({ message: 'Task successfully deleted' });
  });
};