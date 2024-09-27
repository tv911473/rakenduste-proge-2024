const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");

// /cats/ Get endpoint level middleware
router.get("/", todosController.read);
router.post("/", todosController.create);
router.put("/", todosController.update);
router.delete("/", todosController.delete);

module.exports = router;
