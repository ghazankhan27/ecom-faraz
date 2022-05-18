import React from "react";
import ProductCard from "./ProductCard";

export default function ProductSlider({ item }) {
  return (
    <div className="mt-10">
      <p className="mb-4 text-3xl font-bold border-b border-slate-600">
        {item.category}
      </p>
      <div className="flex px-8 min-h-fit py-4 overflow-visible overflow-x-scroll overflow-y-clip space-x-4">
        {item.items.map((item) => (
          <ProductCard
            name={item.name}
            price={item.price}
            description={item.description}
            img={item.img}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
}
