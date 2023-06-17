import React from 'react'
import Image,{StaticImageData} from 'next/image'


const ProductCard = (props:{tittle:string,price:number,img:StaticImageData}) => {
  return (
    <div className='hover:scale-110 duration-300 cursor-pointer'>
         <Image src={props.img} alt='product-1' className='rounded'/>
        <h3 className='font-bold text-lg mt-3'>{props.tittle}</h3>
        <p className='font-bold text-lg'>${props.price}</p>
    </div>
  )
}

export default ProductCard