import "./App.css";
import Child from "./components/Child";
function App() {
  const me = { username: "claurennt", email: "claudia@wbs.com", admin: true };

  return (
    <div className="App">
      <h1>App component - Parent</h1>
      <Child me={me} />
    </div>
  );
}

export default App;
