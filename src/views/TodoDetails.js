import { useParams } from "react-router";

function TodoDetails() {
  const { id } = useParams();

  return <div>Todo Details: {id}</div>;
}

export default TodoDetails;
