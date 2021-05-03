import { useContext } from "react";
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
      {title}
    </li>
  );
}

export default Todo;
