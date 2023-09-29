const { Console } = require("console");
const db = require("./connection");
require('console.table')

const dbfunctions = {
    ViewDepartments: async function () {
        try{
            const sql = `SELECT * FROM department`
            const [department] = await db.promise().query(sql);
            console.table(department);
        }catch(error) {
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
            role.salary, employee.manager_id as manager FROM employee, role, department
            where department.id = role.department_id and role.id = employee.role_id`
            const [employee] = await db.promise().query(sql);
            console.table(employee)
        } catch (error) {
            console.log("Couldn't find your Employees")
        }
    },
    AddEmployee: async function (first_name,last_name,role_id,manager_id){
        try {
            const sql = `insert into employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)`;
            const params =[first_name,last_name,role_id,manager_id];
            await db.promise().query(sql,params)
            console.log(`Your employee was added (${first_name} ${last_name})`)
        } catch (error) {
            Console.log("Your employee couldn't be added")
        }
    },
    AddRole: async function (title,salary,department_id){
        try {
            const sql = `insert into role (title,salary,department_id) values (?,?,?)`;
            const params =[title,salary,department_id];
            await db.promise().query(sql,params)
            console.log(`Your role was added (${title}`)

        } catch (error) {
            Console.log("Your role couldn't be added")
        }
    },
AddDepartment: async function(name){
    try {
        const sql = `INSERT INTO department (name)
        VALUES (?)`;
        const params = [name];
        await db.promise().query(sql,params)
        console.log(`Your department was added (${name}`)

    } catch (error) {
        Console.log("Your department couldn't be added")
    }
}

}
module.exports = dbfunctions;