import ProductCard from '@/components/ProductCard';
import P1 from '/public/p1.png';
import P2 from '/public/p2.png';
import P3 from '/public/p3.png';
import React from 'react';

const ProductList = () => {
  return (
    <div className='mt-8'>
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm font-bold">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
      </div>
      <div className='flex flex-col md:flex-row justify-center md:justify-evenly mt-8 md:mt-16 p-4 md:p-0'>
        <ProductCard tittle='Flex Sweatshirt' price={175} img={P1} />
        <ProductCard tittle='Cameryn Sash Tie Dress' price={545} img={P3} />
        <ProductCard tittle='Brushed Raglan Sweatshirt' price={195} img={P3} />
      </div>
    </div>
  );
};

export default ProductList;
