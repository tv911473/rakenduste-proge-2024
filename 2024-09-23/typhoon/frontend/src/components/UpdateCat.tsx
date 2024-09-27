import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type UpdateCatProps = {
  id: string;
  catName: string;
  fetchCats: () => void;
  cancelEdit: () => void;
};

const UpdateCat = ({ id, catName, fetchCats, cancelEdit }: UpdateCatProps) => {
  const [name, setName] = useState(catName);

  const updateCat = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, name: name }),
      });

      if (response.ok) {
        console.log("Success", response);
        fetchCats();
      } else {
        console.warn("No success");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateCat();
    cancelEdit();
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="New name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit">Update</Button>
          <Button onClick={cancelEdit}>Cancel</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default UpdateCat;
