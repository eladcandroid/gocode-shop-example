// import logo from './logo.svg';
import "./App.css";
import Counter from "./components/Counter";
import Mailbox from "./components/Mailbox";
import NumbersList from "./components/NumbersList";

function App() {
  // const date = new Date();
  // const hours = date.getHours();
  // let myClass = "";

  // if (hours < 12) {
  //   myClass = "morning";
  // } else {
  //   myClass = "after-morning";
  // }

  // const myTitle = "shuki";
  const counters = [
    { id: 1, color: "red", initialCount: 10 },
    { id: 2, color: "blue", initialCount: 20 },
    { id: 3, color: "green", initialCount: 50 },
    { id: 4, color: "purple", initialCount: 100 },
  ];

  return (
    <h1>
      <Counter color="red" initialCount={50}>
        <div>
          DIV <span>SPAN</span>
        </div>
        <button>CLICK ME!</button>
      </Counter>
      <Counter color="red" initialCount={50}></Counter>

      {/* {counters.map((counter) => (
        <Counter
          key={counter.id}
          color={counter.color}
          initialCount={counter.initialCount}
        />
      ))} */}
    </h1>
  );
}

// function myH2() {
//   return <h2>Heading 2</h2>;
// }

export default App;
