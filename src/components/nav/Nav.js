import React from "react";
import ListOfLinks from "./components/ListOfLinks";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";

export default function Nav() {
  return (
    <div className="bg-red-900 py-4 md:px-10 px-4 flex justify-between items-start md:items-center text-white space-x-4">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <ListOfLinks></ListOfLinks>
    </div>
  );
}
