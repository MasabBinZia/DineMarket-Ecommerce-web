import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.webp'
import Link from 'next/link'
import { Input } from "../ui/input"
import { ShoppingCart } from "lucide-react"
import { Search } from "lucide-react"


const Header = () => {
    return (
        <div className='flex justify-between items-center py-6 px-8'>
            <div className='logo'>
            <Image src={logo} alt='logo' className='w-40' />
            </div>
            <div className="navlinks">
            <ul className='flex gap-x-10 '>
                <li className='text-lg'>
                    <Link href={"/"}>Females</Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/"}>Males</Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/"}>Kids</Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/"}>All Products</Link>
                </li>
            </ul>
            </div>
            <div className="search-bar flex">
            <Search className="bg-white rounded-l" />{" "}
         <Input type="search" placeholder="Search Here!" className='w-60 h-6 rounded' />
         </div>
            <div className=' flex h-10 w-10 rounded-full bg-gray-200 justify-center  items-center'>
                <ShoppingCart />
            </div>
        </div>
    )
}

export default Header