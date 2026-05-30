import React from 'react'
import { index } from '../assets'

const Hero = () => {
  return (
    <section id='hero' className='relative flex w-full h-120 sm:h-130 lg:h-160 '>
        

      <div className='  sm:flex flex flex-col gap-3 sm:flex-col lg:gap-12 sm:gap-5 md:gap-7   sm:w-1/2 z-10  lg:py-25 sm:py-18   '>
           <div className='flex flex-col gap-4 sm:px-0 py-8 px-13 sm:py-0 lg:gap-6 sm:gap-3 md:gap-3 w-full lg:ml-25 md:ml-15  sm:ml-12'>
            <p className='text-white font-space text-[45px] leading-12.5  sm:text-[35px] sm:leading-9  md:text-[45px] md:leading-12  lg:text-[65px] lg:leading-15.5 font-bold tracking-tighter'>Transform Your <br /> Business with AI- <br /> Powered <br /> Innovation</p>
            <p className='text-white font-space text-[16px] font-normal tracking-tight md:text-[17px] sm:text-[16px] lg:text-lg'>Next-generation automation  platform <br className='hidden lg:hidden sm:block md:block' /> trusted by forward-thinking <br className='hidden lg:block' /> teams</p>
           </div>
            <div className='flex  gap-5 sm:gap-4   lg:ml-25 md:ml-15  sm:ml-12 px-12 sm:px-0 '>
                <button className='px-3 py-1.5 rounded-lg sm:px-2 sm:py-1 lg:px-5 lg:py-3 md:px-3 md:py-1.5 lg:rounded-xl sm:rounded-lg bg-blue-700 hover:bg-blue-600 font-space lg:text-lg md:text-[17px] text-white cursor-pointer hover:scale-103 transition-all duration-200'>Get Started</button>
                <button className='px-3 py-1.5 rounded-lg sm:px-2 sm:py-1 lg:px-5 lg:py-3 md:px-3 md:py-1.5 lg:rounded-xl sm:rounded-lg border border-gray-500 bg-white/5 cursor-pointer font-space lg:text-lg md:text-[17px] hover:bg-gray-600 hover:scale-103 transition-all duration-200 text-white'>Watch Demo</button>
            </div>
      </div>
      {/* 2nd half */}
      <div className='py-16  sm:w-1/2'>
            <img src={index.HeroImg} className='hidden sm:block lg:w-250 md:w-160' alt="" />
      </div>
      <img src={index.Herobg1} className='  absolute w-90 opacity-70 right-45 bottom-40 sm:w-80 sm:opacity-70  md:w-100 md:opacity-70 lg:-ml-7 lg:-mt-10 lg:w-150 ' alt="" />
      
    <img src={index.Herobg2} className=' absolute hidden sm:w-70  sm:ml-90 sm:mt-25 md:w-90 lg:w-150 md:ml-90 lg:ml-170 md:mt-13 lg:mt-20 -z-10 ' alt="" />
      
      
    </section>
  )
}

export default Hero
