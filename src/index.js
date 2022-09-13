import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/UserContext";
import { ThemeContextProvider } from "./context/ThemeContext";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </ThemeContextProvider>
);
