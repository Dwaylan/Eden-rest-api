const express = require("express");
const mysql = require("mysql");
const pool = require("../../sql/connection");

const list = (req, res) => {
  pool.query(`SELECT * FROM User_credentials`, (err, rows) => {
    if (err) {
      throw new Error(err);
    }
    return res.json(rows);
  });
};

const show = (req, res) => {
  const id = req.params.id;

  pool.query(`SELECT * FROM User_credentials WHERE id = ${id}`, (err, rows) => {
    if (err) {
      throw new Error(err);
    }
    return res.json(rows);
  });
};

const create = (req, res) => {
  const User_credentials = req.body;

  pool.query(
    `INSERT INTO User_credentials (User_Name, User_Password, User_Email) VALUES ("${User_credentials.User_Name}","${User_credentials.User_Password}", "${User_credentials.User_Email}")`,
    (err, rows) => {
      if (err) {
        throw new Error(err);
      }
      return res.json({ id: rows.insertId });
    }
  );
};

const update = (req, res) => {
  let sql = `UPDATE ?? SET ? WHERE ?? = ? `;
  sql = mysql.format(sql, ["User_credentials", req.body, "id", req.params.id]);
  pool.query(sql, (err, results) => {
    if (err) {
      throw new Error(err);
    }
    return res.json({ id: results.message });
  });
};

const remove = (req, res) => {
  let sql = `DELETE FROM ?? WHERE ?? = ? `;
  sql = mysql.format(sql, ["User_credentials", "id", req.params.id]);
  pool.query(sql, (err, results) => {
    if (err) {
      throw new Error(err);
    }
    return res.json({ id: results.affectedRows });
  });
};

module.exports = { list, show, create, update, remove };
