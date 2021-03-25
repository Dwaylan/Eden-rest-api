const express = require("express");
const router = express.Router();
const {
  create,
  update,
  remove,
  show,
  list,
} = require("../../controllers/users");

router.get("/user", list);

router.get("/user/:id", show);

router.post("/user", create);

router.put("/user/:id", update);

router.delete("/user/:id", remove);

module.exports = router;
