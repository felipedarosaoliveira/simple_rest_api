const TaskRepository = require('../repositories/taskRepository');
const TaskService = require('../services/taskService');

module.exports = {
  taskRepository: new TaskRepository(),
  taskService: new TaskService(new TaskRepository()),
};