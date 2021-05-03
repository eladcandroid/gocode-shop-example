// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import ThemeContext from "./contexts/ThemeContext";
import { Link, Route, Switch } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import TodoDetails from "./views/TodoDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/todos/:id">
          <TodoDetails />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
