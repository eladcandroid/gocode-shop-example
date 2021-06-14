import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

function Todo({ id, title, completed, toggleCompleted }) {
  const { darkMode } = useContext(ThemeContext);

  console.log("darkMode", darkMode);

  return (
    <li style={{ color: darkMode ? "white" : "green" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <Link to={`/todos/${id}`}>{title}</Link>
    </li>
  );
}

export default Todo;
