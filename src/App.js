// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Counter from "./components/Counter";

function App() {
  const [todos, setTodos] = useState([]);

  const [globalCounter, setGlobalCounter] = useState(10);

  useEffect(() => {
    console.log("FIRST RENDER & RE-RENDER");
  });

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

  useEffect(() => {
    console.log("USE-EFFECT: GLOBAL COUNTER CHANGED!");
  }, [globalCounter]);

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

  function onIncrement(val) {
    setGlobalCounter(globalCounter + val);
  }

  return (
    <div>
      <button onClick={fetchTodos}>Fetch todos</button>
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="Insert your new todo"
      />
      <button onClick={() => addTodo(newTodo)}>Add Todo</button>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
      Global Counter: {globalCounter}
      <Counter initialCount={10} onIncrement={onIncrement} />
    </div>
  );
}

export default App;
