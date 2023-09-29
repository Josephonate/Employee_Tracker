const db = require("./connection");
require('console.table')

const dbfunctions = {
    ViewDepartments: async function () {
        try {
            const sql = `SELECT * FROM department`
            const [department] = await db.promise().query(sql);
            console.table(department);
        } catch (error) {
            console.log("Couldn't find your Departments")
        }
    },
    ViewRoles: async function () {
        try {
            const sql = `SELECT role.id, role.title, department.name as department, role.salary FROM department, role
            where department.id = role.department_id`
            const [role] = await db.promise().query(sql);
            console.table(role)
        } catch (error) {
            console.log("Couldn't find your Roles")

        }
    },
    ViewEmployees: async function () {
        try {
            const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name as department,
            role.salary, CONCAT(manager.first_name, ' ' ,manager.last_name) AS manager
                FROM employee LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee AS manager ON employee.manager_id = manager.id
                ORDER By employee.id`
            const [employee] = await db.promise().query(sql);
            console.table(employee)
        } catch (error) {
            console.log("Couldn't find your Employees")
        }
    },
    AddEmployee: async function (first_name, last_name, role_id, manager_id) {
        try {
            const sql = `insert into employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)`;
            const params = [first_name, last_name, role_id, manager_id];
            await db.promise().query(sql, params)
            console.log(`Your employee (${first_name} ${last_name}) was added `)
        } catch (error) {
            console.log("Your employee couldn't be added")
        }
    },
    UpdateEmployeeRole: async function(id,role_id){
        try{
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        const params = [role_id,id];
        await db.promise().query(sql, params)
        console.log(`Your role successfully was updated `)
    }catch (error) {
        console.log("Your role couldn't be updated")
    }
    },
    AddRole: async function (title, salary, department_id) {
        try {
            const sql = `insert into role (title,salary,department_id) values (?,?,?)`;
            const params = [title, salary, department_id];
            await db.promise().query(sql, params)
            console.log(`Your role (${title}) was added `)

        } catch (error) {
            console.log("Your role couldn't be added")
        }
    },
    AddDepartment: async function (name) {
        try {
            const sql = `INSERT INTO department (name)
        VALUES (?)`;
            const params = [name];
            await db.promise().query(sql, params)
            console.log(`Your department (${name}) was added `)

        } catch (error) {
            console.log("Your department couldn't be added")
        }
    }

}
module.exports = dbfunctions;