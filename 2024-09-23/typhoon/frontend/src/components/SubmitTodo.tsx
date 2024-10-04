import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitTodoProps = {
  fetchTodos: () => void;
};

const SubmitTodo = ({ fetchTodos }: SubmitTodoProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<number>();

  const submitTodo = async () => {
    try {
      const response = await fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, priority: priority }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success", response);
      } else {
        console.warn("No success", data.errors);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    submitTodo();
    setTimeout(fetchTodos, 100);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Todo title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            label="Priority"
            type="number"
            onChange={(event) => setPriority(Number(event.target.value))}
          />
          <Button variant="outlined" type="submit">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitTodo;
