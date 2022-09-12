import "./App.css";

import Child from "./components/Child";
import { useUserContext } from "./context/UserContext";
function App() {
  const { login, me } = useUserContext();

  return (
    <div className="App">
      {me ? (
        <h1>Welcome back {me.username}</h1>
      ) : (
        <h1>App component - Parent</h1>
      )}
      <button onClick={login}>Login</button>

      <Child />
    </div>
  );
}

export default App;
