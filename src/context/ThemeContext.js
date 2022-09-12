import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

//Provider component
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (e) => {
    setTheme(e.target.name);
  };

  //children are the components wrapped by the provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeContextProvider, useThemeContext };
