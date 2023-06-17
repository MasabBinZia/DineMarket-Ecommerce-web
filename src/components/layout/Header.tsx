"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.webp';
import Link from 'next/link';
import { Input } from "../ui/input";
import { ShoppingCart } from "lucide-react";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  return (
    <nav>
      {/* Large Devices */}
      <div className='flex justify-between items-center mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32'>
        <div className='logo cursor-pointer'>
          <Image src={logo} alt='logo' className='w-40' />
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
          className={`hidden md:flex flex-col md:flex-row gap-x-10 `}
        >
          <Link href={"/"} className='text-lg'>
            Females
          </Link>
          <Link href={"/"} className='text-lg'>
            Males
          </Link>
          <Link href={"/"} className='text-lg'>
            Kids
          </Link>
          <Link href={"/"} className='text-lg'>
            All Products
          </Link>
        </div>
        <div
          className={`${isSearchOpen ? 'flex' : 'hidden'
            } md:flex items-center pt-0`}
        >
          <Search className="bg-white rounded-l" />
          <Input type="search" placeholder="Search Here!" className='w-60 h-6 rounded' />
        </div>
        <div className={`hidden md:flex h-10 w-10 rounded-full bg-gray-200 justify-center items-center cursor-pointer`}
        >
          <ShoppingCart />
        </div>
       {/* Mobile Devices */}
<div
  className={`${isMenuOpen
    ? "flex lg:hidden flex-col w-full h-screen items-center fixed top-0 left-0 z-[100] bg-white px-5 "
    : "flex lg:hidden flex-col w-full h-screen items-center fixed top-[-100%] left-0 z-[100] bg-white px-5 "
  }`}
>
  <div className='flex justify-between items-center w-full h-20 flex-col'>
    <div className='flex items-center'>
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
      <div
        className={`navlinks ${isMenuOpen ? 'flex' : 'hidden'} flex flex-col space-y-6`}
      >
        <Link href={"/"} className='text-lg'>Females</Link>
        <Link href={"/"} className='text-lg'>Males</Link>
        <Link href={"/"} className='text-lg'>Kids</Link>
        <Link href={"/"} className='text-lg'>All Products</Link>
      </div>
    </div>
    <div
      className={` ${isMenuOpen ? 'flex' : 'hidden'} mt-52  flex-col  gap-5 flex h-10 w-10 rounded-full bg-gray-200 justify-center items-center cursor-pointer`}
    >
      <ShoppingCart />
    </div>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Header;
