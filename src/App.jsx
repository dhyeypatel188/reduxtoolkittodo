import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodos from "./compontents/AddTodos";
import Todos from "./compontents/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hello </h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;
