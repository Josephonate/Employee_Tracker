const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
   
    {
        type: 'list',
        name: 'Options',
        message: 'Which option would you like to view?',
        choices: ['View all Departments','View all Roles', 'View all Employees', 
        'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
    }
]
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
          
        });
}

init();