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
    }
}
module.exports = dbfunctions;