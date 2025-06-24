import React from "react";

function Button({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-3 bg-red-500 hover:bg-red-600 rounded-lg text-white"
    >
      Add Task
    </button>
  );
}

export default Button;
