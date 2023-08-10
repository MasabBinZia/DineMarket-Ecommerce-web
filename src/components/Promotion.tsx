import React from "react";
import Image from "next/image";
import Promo1 from "/public/Promo1.webp";
import Promo2 from "/public/Promo2.webp";
import Promo3 from "/public/Promo3.webp";
import { Button } from "./ui/button";

const Promotion = () => {
  return (
    <div className="py-20">
      <div className="text-center flex flex-col mb-8 space-y-3">
        <p className="text-blue-800 text-sm font-bold">PROMOTIONS</p>
        <h1 className="text-3xl text-gray-800 font-bold">
          Our Promotions Events
        </h1>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row gap-4 item-center justify-center">
        {/* Left */}
        <div className="flex items-center lg:flex flex-col gap-4">
          {/*60% off*/}
          <div className="w-[300px] lg:h-50 lg:w-[600px] md:w-[600px] px-8 flex flex-row rounded justify-between items-center bg-gray-300">
            <div>
              <h2 className="block font-bold lg:text-2xl md:text-2xl text-sm">
                GET UP TO{" "}
                <span className="text-2xl lg:text-4xl md:text-4xl">60%</span>
              </h2>
              <p className="block">For the summer season</p>
            </div>
            <Image src={Promo1} alt="Promotion Girl" width={260} height={200} />
          </div>
          {/*30% off*/}
          <div className="w-[300px] lg:h-52 lg:w-[600px] md:w-[600px] flex flex-col items-center rounded justify-center gap-y-3 bg-zinc-800">
            <h2 className="text-4xl text-white font-bold mt-8">GET 30% OFF</h2>
            <p className="text-sm text-white">USE PROMO CODE</p>
            <Button className="mb-4 lg:text-lg tracking-widest text-white bg-zinc-700 px-4 py-1 rounded-lg hover:bg-zinc-700">
              DINEWEEKENDSALE
            </Button>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center gap-4 lg:flex lg:flex-row">
          <div
            className="flex flex-col justify-between items-center rounded  pb-0 pt-3 px-2  lg:w-56 h-[425px]"
            style={{ backgroundColor: "#efe1c7" }}
          >
            <div>
              <h2 className="text-md">
                Flex Sweatshirt
                <br />
              </h2>
              <p>
                <span className="text-md line-through">$100.00</span>
                <span className="font-semibold ml-2">$75.00</span>
              </p>
            </div>
            <div className="Img">
              <Image
                src={Promo2}
                alt="Promotion Girl"
                width={260}
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center rounded pb-0 pt-3 px-2  lg:w-56 h-[425px] bg-gray-300">
            <div>
              <h2 className={"text-md"}>
                Flex Push Button Bomber
                <br />
              </h2>
              <p>
                <span className="text-md line-through text-center">
                  $225.00
                </span>
                <span className="font-semibold ml-2">$190.00</span>
              </p>
            </div>
            <div className="Img">
              <Image
                src={Promo3}
                alt={"Promotion Girl"}
                width={260}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
