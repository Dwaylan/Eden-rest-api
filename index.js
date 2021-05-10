const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const plants = require("./routers/plants");
const mysql = require("mysql");
const pool = require("./sql/connection");

const app = express();
const PORT = process.env.PORT || 5000;

// The code below works but it may be a bit verbose
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Content-Type", "application/json");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, authorization"
//   );
//   res.header("Access-Control-Allow-Methods", "*");
//   next();
// });
app.use(cors());
app.use(bodyParser.json());
app.use(plants);
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Welcome to the eden application");
});

app.listen(PORT, console.log(`I am listening on port ${5000}`));
