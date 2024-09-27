const express = require("express");
const app = express();
const port = 8080;

const catsRoutes = require("./routes/cats.routes");
const exampleRoutes = require("./routes/example.routes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/examples", exampleRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
