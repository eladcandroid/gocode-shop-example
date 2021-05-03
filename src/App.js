// import logo from './logo.svg';
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import ThemeContext from "./contexts/ThemeContext";
import Button from "@material-ui/core/Button";

function App() {
  const [todos, setTodos] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  console.log("darkMode", darkMode);

  function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
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
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        style={{
          background: darkMode ? "black" : "white",
          color: !darkMode ? "black" : "white",
        }}
      >
        <Button variant="outlined" color="primary" onClick={fetchTodos}>
          Fetch todos
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
    </ThemeContext.Provider>
  );
}

export default App;
