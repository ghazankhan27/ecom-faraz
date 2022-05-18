import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
import { Outlet, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App min-h-screen bg-red-100">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
