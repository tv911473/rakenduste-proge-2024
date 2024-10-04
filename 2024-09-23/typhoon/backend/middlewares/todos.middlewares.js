const { body } = require("express-validator");

const validateTodo = [
  body("title").isString().notEmpty().withMessage("Title is required"),
  body("priority")
    .isInt({ min: 1, max: 3 })
    .withMessage("Priority must be 1 - 3"),
];

module.exports = { validateTodo };
