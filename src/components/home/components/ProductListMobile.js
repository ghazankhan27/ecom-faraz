import React from "react";
import ProductCard from "./ProductCard";

export default function ProductListMobile() {
  return (
    <div className="md:hidden grid space-y-4 mt-10">
      <ProductCard
        name={"Shirts"}
        price={""}
        description={""}
        img={
          "https://static-01.daraz.pk/p/ad4007dd6013b767c8c1058362613267.jpg"
        }
      ></ProductCard>
      <ProductCard
        name={"Shoes"}
        price={""}
        description={""}
        img={
          "https://i.insider.com/5b240ed61ae66253008b5228?width=1080&format=jpeg"
        }
      ></ProductCard>
      <ProductCard
        name={"Women Shirts"}
        price={""}
        description={""}
        img={
          "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300888161_058_2_650x.jpg?v=1645640296"
        }
      ></ProductCard>
      <ProductCard
        name={"Kids Clothes"}
        price={""}
        description={""}
        img={
          "https://cdn.shopify.com/s/files/1/0978/2406/products/popular-sport-crew-neck-single-jersey-tee-shirt-for-kids-white-be12186_1_d93ed2fe-6f04-40bd-b86a-d4d56f6b28f7_1600x.jpg?v=1652270986"
        }
      ></ProductCard>
    </div>
  );
}