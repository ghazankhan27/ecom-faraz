import "./App.css";
import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App min-h-screen">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
