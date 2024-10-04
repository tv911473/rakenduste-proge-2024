import {
  Box,
  Container,
  createTheme,
  List,
  ListItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
  },
  components: {
    MuiButtonBase: {},
  },
});

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
    <ThemeProvider theme={theme}>
      <Container sx={{ p: 3 }}>
        <Typography variant="h3" sx={style}>
          TODOs
        </Typography>
        <Box sx={style}>
          <List>
            {todos.map((todo) => (
              <ListItem key={todo.id}>
                <Box
                  sx={{
                    border: "1px solid grey",
                    borderRadius: "4px",
                    padding: "8px",
                    alignItems: "center",
                  }}
                >
                  Title: {todo.title}, Priority: {todo.priority}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <SubmitTodo fetchTodos={fetchTodos} />
      </Container>
    </ThemeProvider>
  );
};

export default Todos;
