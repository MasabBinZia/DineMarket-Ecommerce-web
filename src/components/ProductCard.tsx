import React from 'react'
import Image,{StaticImageData} from 'next/image'


const ProductCard = (props:{tittle:string,price:number,img:StaticImageData}) => {
  return (
    <div>
         <Image src={props.img} alt='product-1'/>
        <h3 className='font-bold text-lg mt-3'>{props.tittle}</h3>
        <p className='font-bold text-lg'>${props.price}</p>
    </div>
  )
}

export default ProductCard