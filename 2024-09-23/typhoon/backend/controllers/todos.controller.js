const todos = [
  {
    id: "1b2e0d54-1a21-4f04-8633-638a02dcbf96",
    title: "ToDo1",
    priority: 1,
    createdAt: 1727437097173,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "6d9d63d1-ced4-4a7f-b240-2f619177383b",
    title: "ToDo2",
    priority: 2,
    createdAt: 1727437106459,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { title, priority } = req.body;

  if (!title || title === "" || priority == null) {
    return res
      .status(400)
      .send({ type: "Error", message: "Missing title or priority" });
  }

  const newTodo = {
    id: crypto.randomUUID(),
    title: title,
    priority: priority,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  todos.push(newTodo);

  res.send(newTodo);
};

exports.read = (req, res) => {
  const visibleTodos = todos.filter((todo) => !todo.deleted);
  res.send(visibleTodos);
};

exports.update = (req, res) => {
  const { id, title, priority } = req.body;

  if (!id || !title || title === "" || !priority) {
    return res
      .status(400)
      .send({ type: "Error", message: "Missing title, priority or id" });
  }

  const updateTodo = todos.filter((todo) => todo.id === id)[0];

  if (!updateTodo) {
    return res.status(404).send({ type: "Error", message: "Missing todo" });
  }

  updateTodo.title = title;
  updateTodo.priority = priority;
  updateTodo.updatedAt = Date.now();

  res.send({
    message: "Todo updated",
    updatedTitle: updateTodo.title,
    updatePriority: updateTodo.priority,
  });
};

exports.delete = (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send({ type: "Error", message: "Missing id" });
  }
  const deleteTodo = todos.find((todo) => todo.id === id);

  if (!deleteTodo) {
    return res.status(404).send({ type: "Error", message: "Missing todo" });
  }

  deleteTodo.deleted = true;
  deleteTodo.updatedAt = Date.now();

  res.send({ message: "Todo deleted", deleteTodo });
};
