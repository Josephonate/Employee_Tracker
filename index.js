const inquirer = require('inquirer');
const dbfunctions = require('./config');
const db = require('./config/connection');

async function promptUser() {
    const questions =
    {

        type: 'list',
        name: 'Options',
        message: 'Choose an option.',
        choices: ['View all Employees','Add Employee', 'Update Employee Role',
        'View all Roles','Add a Role','View all Departments', 'Add a Department','Exit']

    }

    let response = await inquirer.prompt([questions]);

    switch (response.Options) {
        case 'View all Departments':
            await dbfunctions.ViewDepartments()
            break;

        case 'View all Roles':
            await dbfunctions.ViewRoles()
            break;

        case 'View all Employees':
            await dbfunctions.ViewEmployees()
            break;

        default:
            console.log("Goodbye...");
            process.exit(0);
            return;
    }
    promptUser();
}

promptUser();