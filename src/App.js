import "./App.css";

import Child from "./components/Child";
import { useUserContext } from "./context/UserContext";
function App() {
  const { login, logout, me } = useUserContext();

  return (
    <div className="App">
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
