import React, { useState } from 'react'
import { index } from '../assets'

const Navbar = () => {
    const [close, setClose] = useState(false)
    return (
        <nav className='relative flex justify-between items-center sm:px-5 px-5 md:px-5 lg:px-15 bg-gray-900 w-full h-15 md:h-20 lg:h-20 sm:h-15 h-25-sm z-50'>
            <div >
                <img src={index.logo} onClick={() => window.location.href = '/'} className=' cursor-pointer hover:scale-103 w-27 sm:w-25 md:w-27 lg:w-30 transition-all duration-300' alt="" />
            </div>

            <div className='hidden sm:flex sm:gap-3  md:flex md:gap-5 lg:flex lg:gap-7 text-white'>
                <a href="#home" className='text-white sm:text-[15px] md:text-[17px] lg:text-lg font-space font-normal hover:underline underline-offset-6 tranition-all duration-500'>Home</a>
                <a href="#features" className='text-white  sm:text-[15px] md:text-[17px] lg:text-lg font-space font-normal hover:underline underline-offset-6 tranition-all duration-500'>Features</a>
                <a href="#pricing" className='text-white  sm:text-[15px] md:text-[17px] lg:text-lg font-space font-normal hover:underline underline-offset-6 tranition-all duration-500'>Pricing</a>
                <a href="#about" className='text-white  sm:text-[15px] md:text-[17px] text-lg font-space font-normal hover:underline underline-offset-6 tranition-all duration-500'>About</a>
                <a href="#contact" className='text-white  sm:text-[15px] md:text-[17px] text-lg font-space font-normal hover:underline underline-offset-6 tranition-all duration-500 '>Contact</a>
            </div>
            <div className='block sm:hidden'>
                <i onClick={() => setClose(!close)} className='ri-menu-3-line text-white text-xl cursor-pointer transition-all duration-300'></i>
            </div>
            <div
                className={`block sm:hidden absolute top-0 right-0 w-70 h-132 bg-white mt-15
                transition-all duration-300 ease-in-out
                ${close ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
            >
                
                    <img src={index.Herobg1} className='absolute w-full opacity-70 mt-10 -z-10 ' alt="" />
               
                <div className='flex justify-end p-6'>
                    <i onClick={() => setClose(false)} className='ri-close-line text-black text-xl cursor-pointer transition-all duration-300 '></i>
                </div>
                <div className=' flex flex-col gap-5 py-4 items-center '>
                    <a onClick={()=>setClose(false)} href="#home" className='text-black text-xl font-space font-semibold cursor-pointer hover:scale-103'>Home</a>
                    <a onClick={()=>setClose(false)} href="#features" className='text-black text-xl font-space font-semibold'>Features</a>
                    <a onClick={()=>setClose(false)} href="#pricing" className='text-black text-xl font-space font-semibold'>Pricing</a>
                    <a onClick={()=>setClose(false)} href="#about" className='text-black text-xl font-space font-semibold'>About</a>
                    <a onClick={()=>setClose(false)} href="#contact" className='text-black text-xl font-space font-semibold'>Contact</a>
                </div>
               <div className='flex gap-3 ml-14 py-3'>
                 <button className='px-4 py-1 rounded-lg bg-blue-700 text-white text-lg font-space font-normal cursor-pointer hover:bg-blue-600 transition-all duration-300'>Sign in</button>
                <button className='px-4 py-1 rounded-lg border text-black text-lg font-space font-medium cursor-pointer border-gray-500 bg-white/5  hover:bg-gray-400 transition-all duration-300 '>Sign up</button>
               </div>
            </div>
            

            <div className='hidden sm:flex sm:gap-2 md:flex items-center lg:flex md:gap-3 lg:gap-7'>
                <button className=' sm:px-2.5 sm:py-0.5 md:px-4 md:py-1 lg:px-6 lg:py-1.5 rounded-full text-white border border-gray-400 bg-white/5 cursor-pointer hover:bg-gray-500  font-space font-medium  sm:text-[14px] md:text-[15px] lg:text-lg '>Login</button>
                <button className='sm:px-2.5 sm:py-0.5 md:px-4 md:py-1 lg:px-6 lg:py-1.5 rounded-full text-white bg-blue-800 hover:bg-blue-700 cursor-pointer   font-space font-medium lg:text-lg sm:text-[14px] md:text-[15px]'>Sign up</button>
            </div>
        </nav>
    )
}

export default Navbar
