const express = require("express");
const router = express.Router();
const {
  create,
  update,
  remove,
  show,
  list,
} = require("../../controllers/plants");

router.get("/plants", list);

router.get("/plants/:id", show);

router.post("/plants", create);

router.put("/plants/:id", update);

router.delete("/plants/:id", remove);

module.exports = router;
