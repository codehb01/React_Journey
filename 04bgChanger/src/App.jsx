import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-3xl px-3">
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 text-white rounded-full px-4 py-1 m-2 shadow-md"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 text-white rounded-full px-4 py-1 m-2 shadow-md"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-500 text-white rounded-full px-4 py-1 m-2 shadow-md"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
