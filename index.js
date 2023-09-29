const inquirer = require('inquirer');
const dbfunctions = require('./config');


async function promptUser() {
    const questions =
    {
        type: 'list',
        name: 'Options',
        message: 'Choose an option.',
        choices: ['View all Employees', 'Add Employee', 'Update Employee Role',
            'View all Roles', 'Add a Role', 'View all Departments', 'Add a Department', 'Exit']
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
        case 'Add Employee':
            response = await inquirer.prompt([
                {
                    type: "input",
                    name: "first_name",
                    message: "What is the employees first name?"
                },
                {
                    type: "input",
                    name: "last_name",
                    message: "What is the employees last name?"
                },
                {
                    type: "input",
                    name: "role_id",
                    message: "What is the role id number?"
                },
                {
                    type: "input",
                    name: "manager_id",
                    message: "What is the manager id number?"
                }
            ])
            await dbfunctions.AddEmployee(response.first_name, response.last_name, response.role_id, response.manager_id);
            break;
        default:
            console.log("Goodbye...");
            process.exit(0);
        return;
    }
    promptUser();
};

promptUser();