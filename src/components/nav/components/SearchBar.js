import React from "react";

export default function SearchBar() {
  return (
    <div className="flex flex-col space-y-1 items-center md:flex-row md:items-start md:space-x-2">
      <input
        className="p-2 rounded text-black"
        type="text"
        placeholder="Search keywords"
      ></input>
      <button className="hidden md:block border p-1 bg-red-700 rounded transition hover:bg-red-900">
        Search
      </button>
    </div>
  );
}
