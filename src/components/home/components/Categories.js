import React from "react";
import { Link } from "react-router-dom";
import SubCategory from "./SubCategory";

export default function Categories() {
  return (
    <div className="grid md:text-left text-center md:grid-cols-4 bg-red-900 text-white py-10 md:py-0">
      <div className="p-4">
        <p className="text-xl">Categories</p>
        <ul className="mt-4">
          <Link to="/men">
            <SubCategory title={"Men"} list={[]}></SubCategory>
          </Link>
          <Link to="/women">
            <SubCategory title={"Women"} list={[]}></SubCategory>
          </Link>
          <Link to="/kids">
            <SubCategory title={"Kids"} list={[]}></SubCategory>
          </Link>
          <Link to="/kitchen">
            <SubCategory title={"Kitchen"} list={[]}></SubCategory>
          </Link>
          {/* <SubCategory title={"Shoes"} list={[]}></SubCategory>
          <SubCategory title={"Handbags"} list={[]}></SubCategory>
          <SubCategory title={"Jewelery"} list={[]}></SubCategory> */}
        </ul>
      </div>
      <div className="col-span-3 md:flex hidden md:justify-center bg-red-100">
        <img
          className="sliderImage"
          alt="primary slider"
          src="https://static-01.daraz.pk/p/ad4007dd6013b767c8c1058362613267.jpg"
        ></img>
      </div>
    </div>
  );
}
