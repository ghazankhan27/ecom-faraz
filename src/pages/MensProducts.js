import React from "react";
import ProductCard from "../components/home/components/ProductCard";

export default function MensProducts() {
  let items = [
    {
      name: "Charcoal suit",
      description: "Excellent and stylish",
      price: "$239.99",
      img: "https://i.pinimg.com/564x/07/7a/ec/077aec336d8e08a74e9931c4c1ae1e4e--gray-suits-mens-suits.jpg",
    },
    {
      name: "Check dress pants",
      description: "Trendy",
      price: "$24.99",
      img: "https://i.pinimg.com/736x/d3/f2/46/d3f246f587d4be2d0045fc90aeb4efd9.jpg",
    },
    {
      name: "Navy T Shirt",
      description: "Navy",
      price: "$15.99",
      img: "https://i.pinimg.com/736x/d5/9b/43/d59b4384d97ce4ce8c83956e2f01ad88--gift-for-men-men-gifts.jpg",
    },
    {
      name: "Design buttoned shirt",
      description: "Lovely design",
      price: "$23.99",
      img: "https://www.dhresource.com/0x0/f2/albu/g6/M01/57/55/rBVaR1pe7pyAViJwAAk-FvpwPPU371.jpg",
    },
    {
      name: "Cream Jacket",
      description: "Stylish",
      price: "$129.49",
      img: "https://i.pinimg.com/564x/1a/aa/58/1aaa582a20b56fa9ce6ba729a2f43bb4--mens-white-jeans-white-denim.jpg",
    },
    {
      name: "Check Shirt Buttoned",
      description: "Excellent and stylish",
      price: "$22.99",
      img: "https://static-01.daraz.pk/p/88e9f19fa896dbe20bf9554248d539e1.jpg",
    },
    {
      name: "Blue Buttoned Shirt",
      description: "Trendy",
      price: "$19.99",
      img: "https://ae01.alicdn.com/kf/HTB1OL0qMXXXXXaJaXXXq6xXFXXXV/100-Cotton-Brand-Clothing-Shirt-Mens-Clothes-Slim-Fit-Young-Man-Dress-Shirts-Fashion-Long-Sleeve.jpg_Q90.jpg_.webp",
    },
  ];

  return (
    <div className="py-8 px-10">
      <p className="text-center text-3xl text-neutral-700">
        Choose from our selection of men's products
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
