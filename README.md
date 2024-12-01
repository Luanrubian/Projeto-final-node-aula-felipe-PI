# Projeto Final - Node.js com API

Este projeto é uma API simples desenvolvida com Node.js e Sequelize, utilizando PostgreSQL como banco de dados. A API permite a criação e consulta de tarefas. É um exemplo prático de como criar e manipular dados em um banco de dados relacional.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção da API.
- **Sequelize**: ORM para interação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional.
- **Nodemon**: Ferramenta para recarregar automaticamente a aplicação durante o desenvolvimento.

## Funcionalidades

A API possui as seguintes funcionalidades:

- **GET** `/tasks`: Retorna todas as tarefas cadastradas no banco de dados.
- **POST** `/tasks`: Permite a criação de uma nova tarefa no banco de dados.

## Endpoints

### 1. `GET /tasks`

**Descrição**: Este endpoint retorna todas as tarefas cadastradas no banco de dados.

- **Resposta (sucesso)**:
  - **Código de status**: `200 OK`
  - **Exemplo de resposta**:

    ```json
    [
      {
        "id": 1,
        "title": "Tarefa 1",
        "description": "Estudar Node",
        "dueDate": "2024-12-01T00:00:00.000Z",
        "status": "pending",
        "createdAt": "2024-12-01T23:42:16.924Z",
        "updatedAt": "2024-12-01T23:42:16.924Z"
      }
    ]
    ```

### 2. `POST /tasks`

**Descrição**: Este endpoint permite a criação de uma nova tarefa.

- **Corpo da Requisição** (JSON):
  - **title**: Título da tarefa (obrigatório).
  - **description**: Descrição da tarefa (opcional).
  - **dueDate**: Data de vencimento da tarefa (obrigatório).

- **Exemplo de corpo de requisição**:

    ```json
    {
      "title": "Tarefa 2",
      "description": "Estudar Node",
      "dueDate": "2024-12-01"
    }
    ```

- **Resposta (sucesso)**:
  - **Código de status**: `201 Created`
  - **Exemplo de resposta**:

    ```json
    {
      "id": 2,
      "title": "Tarefa 2",
      "description": "Estudar Node",
      "dueDate": "2024-12-01T00:00:00.000Z",
      "status": "pending",
      "createdAt": "2024-12-01T23:42:16.924Z",
      "updatedAt": "2024-12-01T23:42:16.924Z"
    }
    ```

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o Node.js e o PostgreSQL instalados em sua máquina.

1. **Instalar dependências**:

    Execute o comando abaixo para instalar as dependências do projeto:

    ```bash
    npm install
    ```

2. **Configurar o banco de dados**:

    Crie um banco de dados no PostgreSQL e atualize as configurações de conexão no arquivo `config/database.js`.

3. **Iniciar o servidor**:

    Use o comando abaixo para iniciar o servidor:

    ```bash
    npm run dev
    ```

    Isso irá iniciar o servidor em `http://localhost:3000`.

### Testando a API

- **GET /tasks**: Acesse o endpoint no navegador ou use uma ferramenta como o Postman para visualizar todas as tarefas.
- **POST /tasks**: Use o Postman ou outra ferramenta para enviar uma requisição `POST` com o corpo de uma nova tarefa.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Faça um fork deste repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Requisição Post no insominia:

![image](https://github.com/user-attachments/assets/0dcaf8a7-cdc4-40c8-81fb-d0cfdb9def3a)

## Requisição Get no insominia:

![image](https://github.com/user-attachments/assets/700be20f-b76b-4d6b-a842-527aefbcf2d2)




