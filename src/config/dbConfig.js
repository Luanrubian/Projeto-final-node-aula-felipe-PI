const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todolist', 'postgres', '101014', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
