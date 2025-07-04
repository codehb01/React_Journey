import { useState, useCallback, useEffect, useRef } from "react";
// useState: For managing and updating component state.

// useCallback: To memoize functions and prevent unnecessary re-creations.

// useEffect: For running side effects like data fetching, event listeners, or DOM updates when dependencies change.

// useRef: For referencing DOM elements or storing values that persist between renders without triggering re-renders.

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";

    for (let ex = 1; ex < length; ex++) {
      const char = Math.floor(Math.random() * str.length - 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
    // here in dependency array we are passing values which are been check here in useCallback
  }, [length, characterAllowed, numberAllowed]);

  //all the methods that you want to chnage or re-render are pass their varibale name  in dependency array here
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800  text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            name=""
            id=""
            className=" outline-none w-full rounded-l-md bg-white  mt-6 py-1 px-3 read-only:"
            readOnly
            ref={password}
          />
          <button
            onClick={copyPassword}
            className="rounded-r-md bg-purple-500 py-1 px-3 mt-6 text-white "
          >
            copy
          </button>
        </div>
        <div className="flex items-center gap-x-1 mt-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            name=""
            id=""
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>

          <div className="flex items-center gap-x-1 ml-4">
            <input
              type="checkbox"
              name="number"
              id=""
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="number">Number</label>
            <div className="flex items-center gap-x-1 ml-4">
              <input
                type="checkbox"
                name="number"
                id=""
                defaultChecked={numberAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
              />
              <label htmlFor="character">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
