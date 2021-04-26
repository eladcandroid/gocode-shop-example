// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import { useTodos } from "./contexts/TodosContext";

function App() {
  const { todos, setTodos } = useTodos();

  function toggleCompleted(id) {
    console.log("id", id);
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
    <div>
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="Insert your new todo"
      />
      <button onClick={() => addTodo(newTodo)}>Add Todo</button>
      <Todos toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
