import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const addTodos = () => {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const renderTodos = () => {
    return todos.map((todo, index) => (
      <li key={index} className="" p-2 bg-gray-300>
        {todo}
      </li>
    ));
  };
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-300 to-blue-500">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-blue-200">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-700 tracking-wide drop-shadow">
          To Do
        </h1>
        <div className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 shadow-inner border border-gray-100">
          <input
            id="todo"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="flex-1 bg-transparent rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Enter Task"
          />
          <Button onClick={addTodos} />
        </div>
        <ul className="mt-4">{renderTodos()}</ul>
      </div>
    </main>
  );
}

export default App;
