import React from "react";
import { useThemeContext } from "../context/ThemeContext";
const Switch = ({ type, theme }) => {
  const { toggleTheme } = useThemeContext();
  return (
    <label htmlFor={type}>
      {type}
      <input
        onChange={toggleTheme}
        type="checkbox"
        id={type}
        name={type}
        checked={theme === type}
      />
    </label>
  );
};

export default Switch;
