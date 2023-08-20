"use client";
import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="flex gap-x-2 items-center">
      {/* Minus */}
      <button
        className="hover:bg-black hover:text-white flex justify-center items-center text-[15px] font-bold border  h-10 w-10 rounded-full hover:cursor-pointer"
        onClick={() => setNum(num <= 1 ? 1 : num - 1)}
      >
        -
      </button>
      {/* Number */}
      <span className="text-xl px-4">{num}</span>
      {/* Plus */}
      <button
        className="hover:bg-black hover:text-white flex justify-center items-center text-[15px] font-bold border  h-10 w-10 rounded-full hover:cursor-pointer"
        onClick={() => setNum(num + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
