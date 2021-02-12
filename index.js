const express = require("express");
const app = express();
const mysql = require("mysql");
const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the eden application");
});

// app.get("/user", (req, res) => {
//   pool.query("select * from User_credentials", (rows) => {
//     // if (err) throw new error(err);
//     return res.json(rows);
//   });
// });
app.get("/user", (req, res) => {
  pool.query("select * from User_credentials", (err, rows) => {
    // if (err) throw new Error(err);
    return res.json(rows);
  });
});
app.listen(PORT, console.log("I am listening on port 5000"));
