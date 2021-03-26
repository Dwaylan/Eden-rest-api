const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routers/users");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(users);

app.get("/", (req, res) => {
  res.send("Welcome to the eden application please submit user credentials");
});

app.listen(PORT, console.log(`I am listening on port ${5000}`));
