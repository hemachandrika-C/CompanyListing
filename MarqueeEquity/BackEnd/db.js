const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"sai",
    password:"hema",
    port:5432
})

module.exports = pool;