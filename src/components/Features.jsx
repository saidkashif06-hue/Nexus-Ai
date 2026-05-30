import React from 'react'
import { features, index } from '../assets'

const Features = () => {
  return (
    <section id='features' className='w-full lg:h-210 md:h-180 h-160    py-30 flex flex-col items-center overflow-hidden '>
        <div>
            <p className='text-white text-[30px] md:text-[33px] lg:text-4xl font-space font-bold text-center  '>Powerful Features for Modern Teams</p>
        </div>
      <div className=' grid grid-cols-3  gap-y-10 place-items-center -ml-10  py-20'>
        {
            features.map((items,index)=>(
                 <div key={index} className=' flex flex-col lg:gap-2 w-40 h-30 sm:w-50 sm:h-35 md:w-60 md:h-45 lg:w-75 lg:h-60 bg-gray-700 rounded-lg ml-10 px-6   py-2 md:py-4 '>
            <img src={items.icon} className={` ${items.id === 1 ? 'w-4 sm:w-5 md:w-7 lg:w-10': 'w-6 sm:w-8 md:w-10 lg:w-15'}`} alt="" />
           <div className='flex flex-col gap-.5  md:gap-1 lg:gap-2'>
           <p className={`text-white text-[10px] sm:text-[13px] md:text-md  lg:text-lg font-space font-semibold   ${items.id === 1 ? 'mt-2.5 md:mt-4 lg:mt-5.5 ': ''}`}>{items.title} </p>
            <p className='text-gray-300 text-[9px]  sm:text-[11px] md:text-[13px] tracking-tighter lg:text-[15px] font-space font-normal md:leading-5  lg:leading-5.5'>{items.para} </p>
           </div>
        </div>
            ))
        }
      </div>
      
    </section>
  )
}

export default Features
