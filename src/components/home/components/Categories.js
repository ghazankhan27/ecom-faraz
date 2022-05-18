import React from "react";
import SubCategory from "./SubCategory";

export default function Categories() {
  return (
    <div className="grid md:text-left text-center md:grid-cols-4 bg-orange-500 text-white">
      <div className="p-4">
        <p className="text-xl">Categories</p>
        <ul className="mt-4">
          <SubCategory title={"Men"} list={[]}></SubCategory>
          <SubCategory title={"Women"} list={[]}></SubCategory>
          <SubCategory title={"Kids"} list={[]}></SubCategory>
          <SubCategory title={"Shoes"} list={[]}></SubCategory>
          <SubCategory title={"Handbags"} list={[]}></SubCategory>
          <SubCategory title={"Jewelery"} list={[]}></SubCategory>
        </ul>
      </div>
      <div className="col-span-3 md:flex hidden md:justify-center bg-white">
        <img
          className="sliderImage"
          alt="primary slider"
          src="https://static-01.daraz.pk/p/ad4007dd6013b767c8c1058362613267.jpg"
        ></img>
      </div>
    </div>
  );
}
