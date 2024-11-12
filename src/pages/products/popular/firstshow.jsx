import React from 'react'

import chevright from '../../../assets/images/logos/firstshowImg/icon/li.svg'
import chevleft from '../../../assets/images/logos/firstshowImg/icon/leftnav.svg'
import ProductCard from '../../../components/cards/productcard'

export default function Firstshow() {
  return (

    <section className='w-[80%] mx-auto h-[100vh] flex'>
        <div className='w-2/5 bg-cover bg-center bg-firstshow h-full '></div>
        <div className='w-4/5  ml-5 '>
        <div className='flex justify-between h-10 p-4 m-4 items-center shadow-sm'>
            <div>     
                <h2 className='text-xl font-bold'> Bestseller</h2>
            </div>
            <div>
                <ul className='flex w-2/3 justify-between gap-3 items-center font-light text-sm' >
                    <li>Vegetables</li>
                    <li>Dishes</li>
                    <li>Snacks</li>
                </ul>
            </div>
                <div className='flex'>
                    <span>
                         <img src={chevleft} className='w-8' alt="" />
                    </span>
                    <span>
                        <img src={chevright} className='w-8' alt="" />
      
                    </span>
                </div>

         </div>
         <div className='flex flex-wrap  gap-4'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
         </div>
         </div>

    </section>

  )
}
