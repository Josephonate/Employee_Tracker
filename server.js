const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'AsielSol0807!',
        database: 'My_company'
      },
      console.log(`Connected to the My_company database.`)
    );

const questions = [
   
    {
        type: 'list',
        name: 'Options',
        message: 'Choose an option.',
        choices: ['View all Departments','View all Roles', 'View all Employees', 
        'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role','Exit']
    }
]
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
          
        });
}

init();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

// const Sequelize = require('sequelize');
// require('dotenv').config();
// const URI = process.env.MYSQLURI;

// const sequelize = new Sequelize(URI);

// module.exports = sequelize;