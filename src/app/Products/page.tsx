import React from "react";
import { products } from "@/ultils/mock";
import ProductCard from "@/components/ProductCard";

const AllProducts = () => {
  return (
    <div className="py-20 lg:px-20">
      <div className="text-center space-y-3">
        <h3 className="text-3xl text-gray-800 font-bold">All Products</h3>
      </div>
      <div className="flex flex-wrap md:flex-row justify-center md:justify-evenly mt-8 md:mt-16 p-4 md:p-0">
        {products.map((products) => (
          <ProductCard
            key={products.id}
            tittle={products.name}
            price={products.price}
            img={products.image}
            category={products.category}
            id={products.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
