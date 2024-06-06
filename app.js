const express = require('express');

const di = require('./config/di');
const TaskController = require('./controllers/taskController');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

const taskController = new TaskController(di.taskService);

app.use('/api/tarefas', taskRoutes(taskController));

module.exports = app;