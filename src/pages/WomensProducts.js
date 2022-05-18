import React from "react";
import ProductCard from "../components/home/components/ProductCard";

export default function WomensProducts() {
  let items = [
    {
      name: "Black Top",
      description: "Excellent and stylish",
      price: "$14.29",
      img: "https://www.ajmery.pk/image/cache/catalog/Products/Activewear/1/599/Black%20Long%20Sleeve%20Square%20Neck%20Solid%20T-Shirt%20For%20Women.%20SD-581/4-550x550h.jpg.webp",
    },
    {
      name: "Lined shirt",
      description: "Trendy",
      price: "$24.99",
      img: "https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446710/item/phgoods_69_446710.jpg?width=1600&impolicy=quality_75",
    },
    {
      name: "Design buttoned shirt",
      description: "Beautiful design",
      price: "$15.99",
      img: "https://pyxis.nymag.com/v1/imgs/8c8/0ba/55f78bf988c851d8b199f395ecc85abc3c-5----.rsquare.w600.jpg",
    },
    {
      name: "Dress shirt",
      description: "Lovely design",
      price: "$23.99",
      img: "https://www.rlmedia.io/is/image/PoloGSI/s7-1370289_alternate10?$plpDeskRFAlt$",
    },
  ];

  return (
    <div className="py-8 px-10">
      <p className="text-center text-3xl text-neutral-700">
        Choose from our selection of women's products
      </p>
      <div className="grid lg:grid-cols-4 pt-10 lg:gap-12 md:gap-4 md:grid-cols-2">
        {items.map((item) => (
          <ProductCard
            name={item.name}
            description={item.description}
            price={item.price}
            img={item.img}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
}
