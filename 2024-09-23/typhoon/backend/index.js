const express = require("express");
const app = express();
const port = 8080;

const catsRoutes = require("./routes/cats.routes");
const todosRoutes = require("./routes/todos.routes");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const secret = "tlu@secret_key";

app.use(cors());
app.use(express.json());

app.get("/jwt", (req, res) => {
  const title = req.body.title;

  if (!title) {
    return res.status(400).send({ type: "Error", message: "Title required" });
  }

  const token = jwt.sign({ title }, secret, { expiresIn: "1d" });

  console.log(token);
  res.send({ token });
});
app.post("/verify", (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res.status(400).send({ type: "Error", message: "Token required" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res
        .status(400)
        .send({ type: "Error", message: "Token is invalid or expired" });
    }
    console.log(`Title: ${decoded.title}`);
    res.send({ message: "Valid token", decoded });
  });
});

app.use("/cats", catsRoutes);
app.use("/todos", todosRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
