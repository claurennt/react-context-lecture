import "./App.css";

import Child from "./components/Child";
import { useUserContext } from "./context/UserContext";
import { useThemeContext } from "./context/ThemeContext";
import Switch from "./components/Switch";
function App() {
  const { login, logout, me } = useUserContext();
  const { theme } = useThemeContext();

  return (
    <div className={`App ${theme}`}>
      <div>
        <Switch type="dark" theme={theme} />
        <Switch type="light" theme={theme} />
      </div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {me ? (
        <h1>Welcome back {me.username}</h1>
      ) : (
        <h1>App component - Parent</h1>
      )}

      <Child />
    </div>
  );
}

export default App;
