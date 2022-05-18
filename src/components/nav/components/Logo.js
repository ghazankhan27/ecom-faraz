import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="text-2xl text-center p-2 md:p-2 rounded md:block md:text-3xl hover:scale-105 duration-300">
        <p>
          Deals Corner<br></br>
        </p>
        <p className="text-base text-gray-300">25% OFF</p>
      </div>
    </Link>
  );
}
