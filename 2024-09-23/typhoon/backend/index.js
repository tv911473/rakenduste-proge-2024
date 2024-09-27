const express = require("express");
const app = express();
const port = 8080;

const catsRoutes = require("./routes/cats.routes");
const todosRoutes = require("./routes/todos.routes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/todos", todosRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
