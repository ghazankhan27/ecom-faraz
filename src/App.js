import "./App.css";
import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App min-h-screen">
      <Nav></Nav>
      <Outlet></Outlet>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
