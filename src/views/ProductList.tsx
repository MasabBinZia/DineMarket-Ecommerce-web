import ProductCard from '@/components/ProductCard'
import P1 from '/public/p1.png'
import P2 from '/public/p2.png'
import P3 from '/public/p3.png'
import React from 'react'


const ProductList = () => {
  return (
    <div className='flex justify-evenly mt-16 p-0 ml-auto mr-auto z-1  '>
       <ProductCard tittle='Flex Sweatshirt' price={175} img={P1}/>
       <ProductCard tittle='Cameryn Sash Tie Dress' price={545} img={P3}/>
       <ProductCard tittle='Brushed Raglan Sweatshirt' price={195} img={P3}/>
    </div>
  )
}

export default ProductList
