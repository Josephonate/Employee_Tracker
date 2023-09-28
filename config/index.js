const db = require("./connection");
require('console.table')

const dbfunctions = {
    ViewDepartments: async function () {
        try{
            const sql = `select * from table department`
            const [department] = await db.promise().query(sql);
            console.table(department);
        }catch(error) {
            console.log("Couldn't find your Departments")
        }
    }
}
module.exports = dbfunctions;