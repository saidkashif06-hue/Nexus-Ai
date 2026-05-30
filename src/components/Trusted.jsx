import React from 'react'
import { cards } from '../assets'

const Trusted = () => {
  return (
    <section className=' lg:py-4 flex flex-col gap-13 overflow-hidden'>
      
        <p className='text-white font-space font-semibold text-[27px] sm:text-[32px] md:text-[35px]  lg:text-[40px] text-center'>Trusted be Leading Companies</p>
        <div className='flex  gap-2 w-max animate-scroll  '>
           { cards.map((items,index)=>(
               <div key={index} className={`flex w-52 h-20 rounded-sm  items-center justify-center  ${items.id === 2 ? "bg-gray-500 " : "bg-white/85"}`}>
                 <img src={items.image} className={` object-contain  ${[1,9].includes(items.id) ? ' w-30 h-13 ': 'max-w[120px] h-8'} ${  [2, 4, 8, 12].includes(items.id)  ? 'w-150 h-40': 'max-w[120px] h-8 '}`} alt="" />
               </div>
           ))}
        </div>
      
    </section>
  )
}

export default Trusted
