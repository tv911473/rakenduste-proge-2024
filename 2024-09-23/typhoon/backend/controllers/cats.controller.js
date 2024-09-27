const cats = [
  {
    id: "d287831b-9b17-49dd-8f2b-36c6ba0de353",
    name: "Kass1",
    createdAt: 1727424479201,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "9a84cf5f-115d-47fc-8364-f99dacee617c",
    name: "Kass2",
    createdAt: 1727424493750,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { name } = req.body;

  if (!name || name === "") {
    return res.status(400).send({ type: "Error", message: "Missing name" });
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
  const visibleCats = cats.filter((cat) => !cat.deleted);
  res.send(visibleCats);
};

exports.update = (req, res) => {
  const { id, name } = req.body;

  if (!id || !name || name === "") {
    return res
      .status(400)
      .send({ type: "Error", message: "Missing name or id" });
  }

  const updateCat = cats.find((cat) => cat.id === id);

  if (!updateCat) {
    return res.status(404).send({ type: "Error", message: "Missing cat" });
  }

  updateCat.name = name;
  updateCat.updatedAt = Date.now();

  res.send({ message: "Cat updated", updatedName: updateCat.name });
};

exports.delete = (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send({ type: "Error", message: "Missing id" });
  }
  const deleteCat = cats.find((cat) => cat.id === id);

  if (!deleteCat) {
    return res.status(404).send({ type: "Error", message: "Missing cat" });
  }

  deleteCat.deleted = true;
  deleteCat.updatedAt = Date.now();

  res.send({ message: "Cat deleted", deleteCat });
};
