// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
// import Mailbox from "./components/Mailbox";
// import NumbersList from "./components/NumbersList";

function App() {
  const [globalCounter, setGlobalCounter] = useState(50);
  // const counters = [
  //   { id: 1, color: "red", initialCount: 10 },
  //   { id: 2, color: "blue", initialCount: 20 },
  //   { id: 3, color: "green", initialCount: 50 },
  //   { id: 4, color: "purple", initialCount: 100 },
  // ];
  // const globalCounter = 50;

  function incrementGlobal(value) {
    // console.log("incrementGlobal");
    setGlobalCounter(globalCounter + value);
  }
  return (
    <h1>
      <div>{globalCounter}</div>
      <Counter color="red" initialCount={20} onIncrement={incrementGlobal} />
      <Counter color="green" initialCount={30} onIncrement={incrementGlobal} />
    </h1>
  );
}

export default App;
