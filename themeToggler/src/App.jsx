import React, { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";
import { ThemeProvider } from "./contexts/theme.js";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto ">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
