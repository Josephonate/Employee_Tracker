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
            const sql = `SELECT * FROM role`
            const [role] = await db.promise().query(sql);
            console.table(role)
        } catch (error) {
            console.log("Couldn't find your Roles")

        }
    },
    ViewEmployees: async function () {
        try {
            const sql = `SELECT * FROM employee`
            const [employee] = await db.promise().query(sql);
            console.table(employee)
        } catch (error) {
            
        }
    }
}
module.exports = dbfunctions;