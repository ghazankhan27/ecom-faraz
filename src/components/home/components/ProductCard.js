import React from "react";

export default function ProductCard({ name, price, description, img }) {
  return (
    <div className="max-w-96 items-center bg-white flex flex-col overflow-clip shadow-gray-500 shadow-md transition hover:scale-105 rounded">
      <p className="w-full bg-slate-700 text-white z-10 p-4 text-center text-xl font-semibold">
        {name}
      </p>
      <div className="flex items-center w-full justify-center bg-slate-900">
        <img className="h-56 bg-slate-700" alt="product" src={img}></img>
      </div>

      <div className="flex flex-col items-center justify-center p-2 px-4 text-xl bg-slate-700 text-white w-full h-full text-center">
        <p className="pb-2 text-base w-full border-b">{description}</p>
        <p className="pt-2">{price}</p>
      </div>
    </div>
  );
}
