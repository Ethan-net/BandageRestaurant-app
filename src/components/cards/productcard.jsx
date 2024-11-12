import React from 'react'
import { results } from '../Foodrecipe'
import { ToastContainer, toast } from 'react-toastify'; 

export default function ProductCard() {
  return (
    <div className=' flex flex-wrap gap-3 m-2  '>
        {results.map((item)=>(
        <div className=' bg-lightgray w-[30vmin] h-[42vmin] shadow-md ' key={item.id} > 
          <div className='w-full'>
            <img src={item.image} alt="" />
          </div> 
          <div className='m-3'>
            <h2 className='font-bold my-2'>{item.title}</h2>
            <p className='text-sm'>{item.description}</p>
            <h2 className='text-emeraldgreen font-bold my-2'>{item.price}</h2>
          </div> 
         </div> 
        ))}
    </div>
  )
}
