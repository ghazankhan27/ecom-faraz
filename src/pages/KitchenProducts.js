import React from "react";
import ProductCard from "../components/home/components/ProductCard";

export default function KitchenProducts() {
  let items = [
    {
      name: "Grinder Red",
      description: "Plastic, Durable",
      price: "$15.29",
      img: "/images/kitchen/kitchen (1).jpeg",
    },
    {
      name: "Grinder",
      description: "Durable",
      price: "$24.99",
      img: "/images/kitchen/kitchen (2).jpeg",
    },
    {
      name: "Sandwich Maker",
      description: "Black",
      price: "$20.99",
      img: "/images/kitchen/kitchen (3).jpeg",
    },
    {
      name: "Beater",
      description: "Usb cable.",
      price: "$23.99",
      img: "/images/kitchen/kitchen (4).jpeg",
    },
    {
      name: "Waffle Maker",
      description: "Square",
      price: "$21.99",
      img: "/images/kitchen/kitchen (5).jpeg",
    },
    {
      name: "Beater",
      description: "Black",
      price: "$19.99",
      img: "/images/kitchen/kitchen (6).jpeg",
    },
    {
      name: "Grinder White",
      description: "White",
      price: "$23.99",
      img: "/images/kitchen/kitchen (7).jpeg",
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
