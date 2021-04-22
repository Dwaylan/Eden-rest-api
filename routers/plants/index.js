const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  create,
  update,
  remove,
  show,
  list,
} = require("../../controllers/plants");

router.get("/plants", list, cors());

router.get("/plants/:id", show, cors());

router.post("/plants", create);

router.put("/plants/:id", update);

router.delete("/plants/:id", remove);

module.exports = router;
