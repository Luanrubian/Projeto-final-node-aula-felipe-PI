const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

// Rota para criar tarefa
router.post('/tasks', taskController.createTask);

// Rota para listar todas as tarefas
router.get('/tasks', taskController.getTasks);

module.exports = router;
