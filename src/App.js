import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App min-h-screen bg-orange-100">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
