import Button from "@material-ui/core/Button";
import { useContext, useEffect, useState } from "react";
import Todos from "../components/Todos";
import ThemeContext from "../contexts/ThemeContext";

function Home() {
  const { darkMode } = useContext(ThemeContext);

  const [todos, setTodos] = useState([]);

  function fetchTodos() {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    console.log("USE-EFFECT: TODOS CHANGED!");
  }, [todos]);

  function toggleCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  const [newTodo, setNewTodo] = useState("");

  function addTodo(title) {
    if (title) {
      const todo = {
        userId: 1,
        id: todos.length + 1,
        title,
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  }

  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        color: !darkMode ? "black" : "white",
      }}
    >
      <Button variant="outlined" color="primary" onClick={fetchTodos}>
        Get todos
      </Button>
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="Insert your new todo"
      />
      <button onClick={() => addTodo(newTodo)}>Add Todo</button>
      <br />
      <br />
      {darkMode ? "DARK" : "LIGHT"}
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default Home;
