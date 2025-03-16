// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <>
//       <div
//         className="w-full h-screen duration-200"
//         style={{ backgroundColor: color }}
//       >
//         <div className="fixed flex flex-wrap justify-center bottom-25 inset-x-0 px-2">
//           <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-3xl px-3  ">
//             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-4">
//               Blue
//             </button>
//             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-4">
//               Red
//             </button>
//             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-4">
//               Green
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
        margin: 0,
        padding: 0,
        maxWidth: "100%",
        textAlign: "left",
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-3xl px-3">
          <button
            onClick={() => setColor("blue")}
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "9999px", // full rounded
              padding: "0.25rem 1rem",
              border: "none",
              margin: "0.5rem",
            }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("red")}
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "9999px", // full rounded
              padding: "0.25rem 1rem",
              border: "none",
              margin: "0.5rem",
            }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "9999px", // full rounded
              padding: "0.25rem 1rem",
              border: "none",
              margin: "0.5rem",
            }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
