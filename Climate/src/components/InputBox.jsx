import React, { useState } from "react";

function InputBox({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
        className="flex-1 border px-2 py-1 rounded"
      />
      <button className="bg-blue-500 text-white px-4 rounded">Search</button>
    </form>
  );
}

export default InputBox;
