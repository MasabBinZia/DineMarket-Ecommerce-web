"use client"
import { Minus } from 'lucide-react'
import React,{useState} from 'react'

const Quantity = () => {
 const [num,setNum]= useState(1);
  return (
    <div className='flex gap-x-2 items-center'>
        {/* Minus */}
        <button className='center border h-6 w-6 rounded-full hover:cursor-pointer' onClick={()=>setNum(num<=1?1 : num - 1)}>-</button>
        {/* Number */}
        <span className='text-sm'>{num}</span>
        {/* Plus */}
        <button className='center border h-6 w-6 rounded-full hover:cursor-pointer' onClick={()=>setNum(num + 1)}>+</button>
    </div>
  )
}

export default Quantity

// export const OptBtn =()=>{
// return  <div className='center border h-6 w-6 rounded-full '>+</div>

// };