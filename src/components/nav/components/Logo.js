import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="text-2xl p-2 md:p-2 rounded md:block md:text-3xl">
        <p>Deals Corner</p>
      </div>
    </Link>
  );
}
