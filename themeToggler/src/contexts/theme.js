// This is our context api 
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// used to supply value in short and actual values of thememode .lighmode.darkmode would be shared
export const ThemeProvider = ThemeContext.Provider;

// it is defined such that everywhere it could be used
export default function useTheme() {
  return useContext(ThemeContext);
}
