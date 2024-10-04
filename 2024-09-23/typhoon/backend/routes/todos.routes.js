const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");
const todosMiddlewares = require("../middlewares/todos.middlewares");

// /cats/ Get endpoint level middleware
router.get("/", todosController.read);
router.post("/", todosMiddlewares.validateTodo, todosController.create);
router.put("/", todosMiddlewares.validateTodo, todosController.update);
router.delete("/", todosController.delete);

module.exports = router;
