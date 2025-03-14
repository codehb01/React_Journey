import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 15;
  // counter variable and setcounter function
  const [counter, setcounter] = useState(15);

  const addValue = () => {
    setcounter((prevCounter) => prevCounter + 1);
    setcounter((prevCounter) => prevCounter + 1);
    setcounter((prevCounter) => prevCounter + 1);
  };

  const subValue = () => {
    setcounter((prevCounter) => prevCounter - 1);
    setcounter((prevCounter) => prevCounter - 1);
    setcounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <h1>Harshal's React App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={subValue}>Remove Value</button>
      <p>footer:</p>
    </>
  );
}

export default App;
