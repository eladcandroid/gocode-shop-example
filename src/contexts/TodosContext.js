import React, { useContext, useState } from "react";

const TodosContext = React.createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      userId: 1,
      id: 1,
      title: "Do H.W",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "Fix computer",
      completed: true,
    },
  ]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export default TodosContext;
