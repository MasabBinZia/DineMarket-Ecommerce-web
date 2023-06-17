import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import heroImg from '/public/heroImg.webp'
import Featured1 from '/public/Featured1.webp'
import Featured2 from '/public/Featured2.webp'
import Featured3 from '/public/Featured3.webp'
import Featured4 from '/public/Featured4.webp'
import { ShoppingCart } from "lucide-react"
import Image from 'next/image'
const Hero = () => {
    return (
        <div className='mt-8'>
        <section className='flex flex-col lg:flex-row gap-y-10 py-6 px-12 '>
            {/* Left Side */}
            <div className='flex-1'>
                <Badge className='py-3 text-lg px-6 rounded-lg bg-blue-200 text-blue-700 h-10 '>Sale 70%</Badge>
                <h1 className=" mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    An Industrial Take <br /> on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Anyone can beat you but no one can beat your outfit as long as you<br /> wear Dine outfits.
                </p>
                <Button className='bg-black h-12 px-8 mt-4'>
                    <ShoppingCart className='mr-2'/>
                    Start Shopping</Button>
                    <div className='flex space-x-4 mt-16 items-center'>
                        <Image src={Featured1} alt='ima'/>
                        <Image src={Featured2} alt='ima'/>
                        <Image src={Featured3} alt='ima'/>
                        <Image src={Featured4} alt='ima'/>
                    </div>
            </div>
            {/* Right Side */}
            <div className='flex-1'>
                <Image src={heroImg} alt='heroImg' />
            </div>
        </section>
        </div>
    )
}

export default Hero