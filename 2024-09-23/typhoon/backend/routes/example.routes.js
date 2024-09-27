const express = require("express");
const router = express.Router();

router.get("/posts/:postID", (req, res) => {
  res.send(req.params);
});

router.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

router.post("/posts/:postID", (req, res) => {
  res.send(req.params);
});

module.exports = router;
