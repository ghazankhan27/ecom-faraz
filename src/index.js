import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MensProducts from "./pages/MensProducts";
import WomensProducts from "./pages/WomensProducts";
import KidsProducts from "./pages/KidsProducts";
import KitchenProducts from "./pages/KitchenProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="men" element={<MensProducts></MensProducts>}></Route>
        <Route path="women" element={<WomensProducts></WomensProducts>}></Route>
        <Route path="kids" element={<KidsProducts></KidsProducts>}></Route>
        <Route
          path="kitchen"
          element={<KitchenProducts></KitchenProducts>}
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
