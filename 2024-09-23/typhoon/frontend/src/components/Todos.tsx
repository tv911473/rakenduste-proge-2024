import { Box, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SubmitTodo from "./SubmitTodo";

type Todo = {
  id: string;
  title: string;
  priority: number;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8080/todos");
    const data = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box>
      <Typography variant="h3" sx={style}>
        TODOs
      </Typography>
      <Box sx={style}>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              Title: {todo.title}, Priority: {todo.priority}
            </ListItem>
          ))}
        </List>
      </Box>

      <SubmitTodo fetchTodos={fetchTodos} />
    </Box>
  );
};

export default Todos;
