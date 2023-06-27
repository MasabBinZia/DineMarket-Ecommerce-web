"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.webp';
import Link from 'next/link';
import { Menu, X, Search, ShoppingCart } from "lucide-react";

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
      <div className='flex justify-between items-center mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32'>
        <div className='logo cursor-pointer'>
          <Link href={"/"}>
            <Image src={logo} alt='logo' className='w-40' />
          </Link>
        </div>
        <div className='md:hidden'>
          {isMenuOpen ? (
            <X
              className='text-gray-500 cursor-pointer'
              size={24}
              onClick={handleMenuToggle}
            />
          ) : (
            <Menu
              className='text-gray-500 cursor-pointer'
              size={24}
              onClick={handleMenuToggle}
            />
          )}
        </div>
        <div
          className={`hidden md:flex flex-col md:flex-row gap-x-10`}
        >
          <Link href={"Category/female"} className='text-lg'>
            Females
          </Link>
          <Link href={"Category/male"} className='text-lg'>
            Males
          </Link>
          <Link href={"Category/kids"} className='text-lg'>
            Kids
          </Link>
          <Link href={"/Products"} className='text-lg'>
            All Products
          </Link>
        </div>
        <div className={`${isSearchOpen ? 'flex' : 'hidden'} md:flex items-center pt-0`}>
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
        <div className={`hidden md:flex h-10 w-10 rounded-full bg-gray-200 justify-center items-center cursor-pointer`}>
          <ShoppingCart />
        </div>
        {/* Mobile Devices */}
        <div
          className={`${isMenuOpen
            ? "fixed inset-0 z-50 bg-white transition-opacity duration-300 ease-in-out"
            : "hidden"
            }`}
        >
          <div className="flex justify-between items-center h-16 px-4 sm:px-6">
            <div>
              <Image src={logo} alt='logo' className='w-32' />
            </div>
            <div className="md:hidden">
              {isMenuOpen ? (
                <X
                  className='text-gray-500 cursor-pointer'
                  size={24}
                  onClick={handleMenuToggle}
                />
              ) : (
                <Menu
                  className='text-gray-500 cursor-pointer'
                  size={24}
                  onClick={handleMenuToggle}
                />
              )}
            </div>
          </div>
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white`}
          >
            <Link href={"Category/female"} className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50' onClick={handleCategoryClick}>
              Females
            </Link>
            <Link href={"Category/male"} className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50' onClick={handleCategoryClick}>
              Males
            </Link>
            <Link href={"Category/kids"} className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50' onClick={handleCategoryClick}>
              Kids
            </Link>
            <Link href={"/Products"} className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50' onClick={handleCategoryClick} >
              All Products
            </Link>
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ShoppingCart className='h-6 w-6 text-gray-500' />
              </div>
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
