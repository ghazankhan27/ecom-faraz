import React from "react";
import Categories from "./components/Categories";
import ProductListMobile from "./components/ProductListMobile";
// import ProductSlider from "./components/ProductSlider";

export default function Content() {
  // let items = [
  //   {
  //     category: "Phones",
  //     items: [
  //       {
  //         name: "Iphone 13 Pro Max",
  //         price: 12999,
  //         description: "The newest iphone",
  //         img: "https://itechpk.com/mu/2021/11/iPhone-13-Pro-Max-Main-Image-1.png",
  //       },
  //       {
  //         name: "Iphone 13 Pro Max",
  //         price: 12999,
  //         description: "The newest iphone",
  //         img: "https://itechpk.com/mu/2021/11/iPhone-13-Pro-Max-Main-Image-1.png",
  //       },
  //       {
  //         name: "Iphone 13 Pro Max",
  //         price: 12999,
  //         description: "The newest iphone",
  //         img: "https://itechpk.com/mu/2021/11/iPhone-13-Pro-Max-Main-Image-1.png",
  //       },
  //       {
  //         name: "Iphone 13 Pro Max",
  //         price: 12999,
  //         description: "The newest iphone",
  //         img: "https://itechpk.com/mu/2021/11/iPhone-13-Pro-Max-Main-Image-1.png",
  //       },
  //       {
  //         name: "Iphone 13 Pro Max",
  //         price: 12999,
  //         description: "The newest iphone",
  //         img: "https://itechpk.com/mu/2021/11/iPhone-13-Pro-Max-Main-Image-1.png",
  //       },
  //       {
  //         name: "Iphone 13 Pro Max",
  //         price: 12999,
  //         description: "The newest iphone",
  //         img: "https://itechpk.com/mu/2021/11/iPhone-13-Pro-Max-Main-Image-1.png",
  //       },
  //     ],
  //   },
  //   {
  //     category: "Furniture",
  //     items: [
  //       {
  //         name: "Chair",
  //         price: 650,
  //         description: "a chair",
  //         img: "https://m.media-amazon.com/images/I/71H8ObbkmKL._AC_SL1500_.jpg",
  //       },
  //       {
  //         name: "Chair",
  //         price: 650,
  //         description: "a chair",
  //         img: "https://m.media-amazon.com/images/I/71H8ObbkmKL._AC_SL1500_.jpg",
  //       },
  //       {
  //         name: "Chair",
  //         price: 650,
  //         description: "a chair",
  //         img: "https://m.media-amazon.com/images/I/71H8ObbkmKL._AC_SL1500_.jpg",
  //       },
  //       {
  //         name: "Chair",
  //         price: 650,
  //         description: "a chair",
  //         img: "https://m.media-amazon.com/images/I/71H8ObbkmKL._AC_SL1500_.jpg",
  //       },
  //       {
  //         name: "Chair",
  //         price: 650,
  //         description: "a chair",
  //         img: "https://m.media-amazon.com/images/I/71H8ObbkmKL._AC_SL1500_.jpg",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="container mx-auto px-10 py-10">
      <Categories></Categories>
      <ProductListMobile></ProductListMobile>
      {/* {items.map((item) => (
        <ProductSlider item={item}></ProductSlider>
      ))} */}
    </div>
  );
}
