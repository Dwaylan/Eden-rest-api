const express = require("express");
const bodyParser = require("body-parser");
const plants = require("./routers/plants");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(plants);

app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the eden application");
});

app.listen(PORT, console.log(`I am listening on port ${5000}`));
