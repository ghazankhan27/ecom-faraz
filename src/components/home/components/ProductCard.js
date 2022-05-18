import React from "react";

export default function ProductCard({ name, price, description, img }) {
  return (
    <div className="max-w-96 items-center bg-white flex flex-col overflow-clip shadow-gray-500 shadow-md transition hover:scale-105 rounded">
      <p className="w-full shadow-md z-10 p-4 text-center text-2xl font-semibold">
        {name}
      </p>
      <img className="z-0 w-48 h-48" alt="product image" src={img}></img>
      <p className="p-2">{description}</p>
      <p className="p-2 text-xl bg-slate-700 text-white w-full text-center">
        {price}
      </p>
    </div>
  );
}
