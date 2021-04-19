import { useState } from "react";

function Counter({ color, initialCount, onIncrement }) {
  // console.log("COUNTER", color);

  const [count, setCount] = useState(initialCount);
  // const [shuki, setShuki] = useState("Aba");

  function increment() {
    setCount(count + 1);
    onIncrement(1);
  }

  function incrementBy2() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    onIncrement(2);
  }

  return (
    <div style={{ color, padding: 50 }}>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementBy2}>incrementBy2</button>
    </div>
  );
}

export default Counter;
