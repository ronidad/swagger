const { createPool } = require("mysql");

const db = createPool({
    port: 3306,
    host: "us-cdbr-east-06.cleardb.net",
    user: "b9edfde7bfce36",
    password: "ccf5bb57",
    database: "heroku_311880e0c34ee8d",
    connectionLimit: 10


});
module.exports = db;