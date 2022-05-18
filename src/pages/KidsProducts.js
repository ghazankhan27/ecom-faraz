import React from "react";
import ProductCard from "../components/home/components/ProductCard";

export default function KidsProducts() {
  let items = [
    {
      name: "Unicorn shirt",
      description: "Comfy",
      price: "$8.29",
      img: "https://i.insider.com/618acc1e80dab90018db0144?width=700",
    },
    {
      name: "Dotted shirt",
      description: "Trendy",
      price: "$12.99",
      img: "https://cdn.shopify.com/s/files/1/0471/9381/7249/files/little_boy_59dc3d02-bd70-495a-b5c9-daa3e6ad6e79_2000x.jpg?v=1648296679",
    },
    {
      name: "Navy Dress",
      description: "Beautiful design",
      price: "$15.99",
      img: "https://www.islamabadonlineshop.pk/wp-content/uploads/2018/05/92-1-1.jpg",
    },
    {
      name: "Blue Dress",
      description: "Lovely design",
      price: "$23.99",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJ92EQ1UQ2bHnN2wrT5U8VmUKooE_NhzCXw&usqp=CAU",
    },
  ];

  return (
    <div className="py-8 px-10">
      <p className="text-center text-3xl text-neutral-700">
        Choose from our selection of Kids products
      </p>
      <div className="gap-6 grid lg:grid-cols-4 pt-10 lg:gap-12 md:gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <ProductCard
            key={index}
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
