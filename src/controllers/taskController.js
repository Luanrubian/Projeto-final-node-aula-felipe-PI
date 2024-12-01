const Task = require('../models/taskModel');

// Criar nova tarefa
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = await Task.create({ title, description, dueDate });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar tarefa', error });
  }
};

// Listar todas as tarefas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar tarefas', error });
  }
};
