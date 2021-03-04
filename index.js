const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the eden application");
});

app.get("/user", (req, res) => {
  pool.query(`SELECT * FROM User_credentials`, (err, rows) => {
    if (err) {
      throw new Error(err);
    }
    return res.json(rows);
  });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  pool.query(`SELECT * FROM User_credentials WHERE id = ${id}`, (err, rows) => {
    if (err) {
      throw new Error(err);
    }
    return res.json(rows);
  });
});
app.post("/user", (req, res) => {
  const User_credentials = req.body;

  pool.query(
    `INSERT INTO User_credentials (User_Name, User_Password, User_Email) VALUES (${User_credentials.User_Name},${User_credentials.User_Password}, ${User_credentials.User_Email})`,
    (err, rows) => {
      if (err) {
        throw new Error(err);
      }
      return res.json({ id: rows.insertId });
    }
  );
});

app.put("/user/:id", (req, res) => {
  let sql = `UPDATE ?? SET ? WHERE ?? = ? `;
  sql = mysql.format(sql, ["User_credentials", req.body, "id", req.params.id]);
  pool.query(sql, (err, results) => {
    if (err) {
      throw new Error(err);
    }
    return res.json({ id: results.message });
  });
});

app.delete("/user/:id", (req, res) => {
  let sql = `DELETE FROM ?? WHERE ?? = ? `;
  sql = mysql.format(sql, ["User_credentials", "id", req.params.id]);
  pool.query(sql, (err, results) => {
    if (err) {
      throw new Error(err);
    }
    return res.json({ id: results.affectedRows });
  });
});

app.listen(PORT, console.log(`I am listening on port ${5000}`));
