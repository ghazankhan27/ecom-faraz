import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ListOfLinks() {
  const [show, setShow] = useState("hidden");

  const handleClick = () => {
    if (show === "hidden") setShow("");
    else setShow("hidden");
  };

  return (
    <div className="flex flex-col items-end text-right">
      <p onClick={handleClick} className="text-2xl md:hidden">
        <AiOutlineMenu></AiOutlineMenu>
      </p>
      <div className={"md:block mt-6 md:mt-0 " + show}>
        <ul className="md:flex md:space-x-12 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">All Products</Link>
          </li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  );
}
