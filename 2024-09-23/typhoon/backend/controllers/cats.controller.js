const cats = [];

exports.create = (req, res) => {
  const { name } = req.body;

  if (!name || name === "") {
    return res.status(418).send({ type: "Error", message: "Missing name" });
  }

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  cats.push(newCat);

  res.send(newCat);
};

exports.read = (req, res) => {
  res.send(cats);
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
