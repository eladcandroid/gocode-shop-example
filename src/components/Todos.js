import { useContext, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Todo from "./Todo";

function Todos({ todos, toggleCompleted }) {
  const { setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    console.log("TODOS: FIRST REDNER");

    return () => console.log("TODOS: DIE!!!!");
  }, []);

  return (
    <>
      <button onClick={() => setDarkMode(true)}>DARK MODE</button>

      <ul>
        {todos.map(({ id, title, completed }) => (
          <Todo
            key={id}
            id={id}
            title={title}
            completed={completed}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </>
  );
}

export default Todos;
