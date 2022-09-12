import "./App.css";
import Child from "./components/Child";
import UserContext from "./context/UserContext";
function App() {
  const me = { username: "claurennt", email: "claudia@wbs.com", isAdmin: true };

  return (
    <UserContext.Provider value={me}>
      <div className="App">
        <h1>App component - Parent</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default App;
