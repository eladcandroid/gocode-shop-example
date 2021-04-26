import { useTodos } from "../contexts/TodosContext";
import Todo from "./Todo";

function Todos({ toggleCompleted }) {
  const { todos } = useTodos();
  return (
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
  );
}

export default Todos;
