"use client";
import React, { useState } from "react";
import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";
import Link from "next/link";

const sizes = ["xs", "sm", "md", "lg", "xl"];

const IdPage = ({ params }: { params: { id: string | number } }) => {
  const Product_id = params.id;
  const products = useAppSelector((state) => state.products);
  const id = products.filter((val) => val.id == Product_id);
  const [cartItem, setCartItem] = useState({
    id: id[0].id,
    name: id[0].name,
    tagline: id[0].tagline,
    price: id[0].price,
    category: id[0].category,
    image: id[0].image,
    discount: id[0].discount,
    qty: id[0].qty,
    slug: id[0].slug,
  });

  return (
    <div className="flex flex-wrap gap-y-10 py-6 px-40 mt-16">
      {id.length > 0 ? (
        id.map((products) => (
          <div key={products.id} className="flex justify-between gap-6">
            <div>
              <Image
                src={products.image}
                alt={products.name}
                className="w-96"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{products.name}</h1>
              <h2 className="text-base text-gray-400 font-semibold">
                {products.tagline}
              </h2>
              <div>
                <h3 className="text-lg mt-4 font-semibold ">Select Size:</h3>
                <div className="flex gap-x-3">
                  {sizes.map((item, index) => {
                    return (
                      <label key={index} className="">
                        <input type="checkbox" className="hidden peer" />
                        <span className=" mt-2 center duration-300 border rounded-full center hover:shadow-xl flex items-center justify-center cursor-pointer w-10 h-10 text-[15px] uppercase font-semibold text-center text-gray-600 peer-checked:bg-black peer-checked:text-white ">
                          {item}
                        </span>
                      </label>
                    );
                  })}
                </div>

                <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="text-lg  font-semibold">Quantity:</h3>
                  {/* <Quantity /> */}
                  <p></p>
                  <div className="flex gap-x-2 items-center">
                    {/* Minus */}
                    <button
                      className="hover:bg-black hover:text-white flex justify-center items-center text-[15px] font-bold border  h-10 w-10 rounded-full hover:cursor-pointer"
                      onClick={() =>
                        setCartItem((prevCartItem) => ({
                          ...prevCartItem,
                          qty: Math.max(prevCartItem.qty - 1, 1),
                        }))
                      }
                    >
                      -
                    </button>
                    {/* Number */}
                    <span className="text-xl px-4">{cartItem.qty}</span>
                    {/* Plus */}
                    <button
                      className="hover:bg-black hover:text-white flex justify-center items-center text-[15px] font-bold border  h-10 w-10 rounded-full hover:cursor-pointer"
                      onClick={() =>
                        setCartItem((prevCartItem) => ({
                          ...prevCartItem,
                          qty: prevCartItem.qty + 1,
                        }))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* Add to Cart */}
                <div className="mt-5 flex items-center gap-x-4">
                  <Link href={"/addtocart"}>
                    <Button className="bg-black">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </Link>
                  <h2 className="text-2xl font-bold">
                    ${cartItem.price * cartItem.qty}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
};

export default IdPage;
