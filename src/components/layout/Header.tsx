"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/headerLogo.webp";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { navLink } from "@/ultils/navData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };
  const handleCategoryClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      {/* Large Devices */}
      <div className="flex justify-between items-center mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <div className="logo cursor-pointer">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={160} />
          </Link>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <X
              className="text-gray-500 cursor-pointer"
              size={24}
              onClick={handleMenuToggle}
            />
          ) : (
            <Menu
              className="text-gray-500 cursor-pointer"
              size={24}
              onClick={handleMenuToggle}
            />
          )}
        </div>
        <div className={`hidden md:flex flex-col md:flex-row gap-x-10`}>
          {navLink.map((nav) => (
            <Link href={nav.href} className="text-lg" key={nav.id}>
              {nav.name}
            </Link>
          ))}
        </div>
        <div
          className={`${
            isSearchOpen ? "flex" : "hidden"
          } md:hidden lg:flex items-center pt-0`}
        >
          <div className="relative flex">
            <input
              type="search"
              placeholder="Search Here!"
              className="w-60 h-6 pl-8 pr-4 rounded"
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <Search className="text-gray-500" size={18} />
            </div>
          </div>
        </div>
        <div
          className={`hidden md:flex h-10 w-10 rounded-full bg-gray-200 justify-center items-center cursor-pointer`}
        >
          <Link href={"/AddtoCart"}>
            <ShoppingCart />
          </Link>
        </div>
        {/* Mobile Devices */}
        <div
          className={`${
            isMenuOpen
              ? "fixed inset-0 z-50 bg-white transition-opacity duration-300 ease-in-out"
              : "hidden"
          }`}
        >
          <div className="flex justify-between items-center h-16 px-4 sm:px-6">
            <div>
              <Image src={logo} alt="logo" width={128} />
            </div>
            <div className="md:hidden">
              {isMenuOpen ? (
                <X
                  className="text-gray-500 cursor-pointer"
                  size={24}
                  onClick={handleMenuToggle}
                />
              ) : (
                <Menu
                  className="text-gray-500 cursor-pointer"
                  size={24}
                  onClick={handleMenuToggle}
                />
              )}
            </div>
          </div>
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white`}>
            {navLink.map((nav) => (
              <Link
                href={nav.href}
                key={nav.id}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={handleCategoryClick}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <div className="flex items-center">
              <Link href={"/AddtoCart"} className="flex-shrink-0">
                <ShoppingCart className="h-6 w-6 text-gray-500" />
              </Link>
              <div className="ml-3">
                <p className="text-base font-medium text-gray-700">Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
