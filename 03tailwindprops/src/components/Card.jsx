import React from "react";

function Card(props) {
  console.log(props);

  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8  bg-amber-500">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt="City skyline"
          src="https://images.pexels.com/photos/2062477/pexels-photo-2062477.jpeg"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
