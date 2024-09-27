import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";
import UpdateCat from "./UpdateCat";
import DeleteCat from "./DeleteCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [updateCat, setUpdateCat] = useState<string | null>(null);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const cancelEdit = () => setUpdateCat(null);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box>
      <Typography variant="h3" sx={style}>
        Cats
      </Typography>
      <Box sx={style}>
        <List>
          {cats.map((cat) => (
            <ListItem key={cat.id}>
              {updateCat === cat.id ? (
                <UpdateCat
                  id={cat.id}
                  catName={cat.name}
                  fetchCats={fetchCats}
                  cancelEdit={cancelEdit}
                />
              ) : (
                <>
                  Name: {cat.name}
                  <Button onClick={() => setUpdateCat(cat.id)}>Edit</Button>
                  <DeleteCat id={cat.id} fetchCats={fetchCats} />
                </>
              )}
            </ListItem>
          ))}
        </List>
      </Box>

      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
