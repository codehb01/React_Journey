import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Card from "./components/Card.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-400 p-3 rounded-md">
        Harshal using tailwind for vite
      </h1>

      <Card />
    </>
  );
}

export default App;
