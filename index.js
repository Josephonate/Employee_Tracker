const inquirer = require('inquirer');
const dbfunctions = require('./config')

async function promptUser() {
    const questions =
    {

        type: 'list',
        name: 'Options',
        message: 'Choose an option.',
        choices: ['View all Departments', 'View all Roles', 'View all Employees',
            'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']

    }

    let response = await inquirer.prompt([questions]);

    switch (response.Options) {
        case 'View all Departments':
            await dbfunctions.ViewDepartments()
            break;

        default:
            console.log("Goodbye...");
            process.exit(0);
            return;
    }
    promptUser();
}

promptUser();