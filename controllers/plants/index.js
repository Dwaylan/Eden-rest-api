// const express = require("express");
const mysql = require("mysql");
const pool = require("../../sql/connection");

const list = (req, res) => {
  pool.query(`SELECT * FROM State_plants`, (err, rows) => {
    if (err) {
      throw new Error(err);
    }
    return res.json(rows);
  });
};

const show = (req, res) => {
  const id = req.params.id;

  pool.query(`SELECT * FROM State_plants WHERE id = ${id}`, (err, rows) => {
    if (err) {
      throw new Error(err);
    }
    return res.json(rows);
  });
};

const create = (req, res) => {
  const State_plants = req.body;

  pool.query(
    `INSERT INTO State_plants (Insert into State_plants (Common_name, Scientific_name, State, State_Abbreviation, Toxicity, Image) values) VALUES ("${State_plants.Common_name}","${State_plants.Scientific_name}", "${State_plants.State}","${State_plants.State_Abbreviation}"), "${State_plants.toxicity},"${State_plants.image}""`,
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
  sql = mysql.format(sql, ["State_plants", req.body, "id", req.params.id]);
  pool.query(sql, (err, results) => {
    if (err) {
      throw new Error(err);
    }
    return res.json({ id: results.message });
  });
};

const remove = (req, res) => {
  let sql = `DELETE FROM ?? WHERE ?? = ? `;
  sql = mysql.format(sql, ["State_plants", "id", req.params.id]);
  pool.query(sql, (err, results) => {
    if (err) {
      throw new Error(err);
    }
    return res.json({ id: results.affectedRows });
  });
};

module.exports = { list, show, create, update, remove };
