const mysql = require("mysql");

require("dotenv").config();

console.log(process.env.DB_HOST);
class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.DB_USER,
        user: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
