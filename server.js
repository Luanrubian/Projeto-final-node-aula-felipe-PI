const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./src/routes/taskRoutes');
const sequelize = require('./src/config/dbConfig');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(taskRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });


  sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
