import React, { useState } from 'react'
import { faqData } from '../assets'

const FAQ = () => {

    const [openId, setOpenId] = useState(null)

    return (
        <section id='about' className='w-full h-160   flex flex-col md:py-17 lg:py-20 px-4 sm:px-6 lg:px-8 items-center'>

            <p className='text-white text-3xl sm:text-4xl md:text-[45px] lg:text-5xl font-space font-bold text-center'>
                Frequently Asked Questions
            </p>

            <div className='flex flex-col gap-4 sm:gap-5 mt-10 sm:mt-12 lg:mt-14 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto'>

                {faqData.map((items) => (

                    <div
                        key={items.id}
                        className={`
                            flex flex-col w-full rounded-md bg-[#FFFFFF]/10
                            px-4 sm:px-5 py-3 overflow-hidden
                            transition-all duration-300 ease-in-out
                            ${openId === items.id ? "max-h-60" : "max-h-14"}
                        `}
                    >

                        {/* Question */}
                        <p className='text-white text-[15px] sm:text-[17px] font-space font-semibold flex justify-between items-center'>

                            <span className='pr-4'>{items.title}</span>

                            <i
                                onClick={() =>
                                    setOpenId(openId === items.id ? null : items.id)
                                }
                                className={`
                                    text-white text-xl flex-shrink-0
                                    cursor-pointer transition-transform duration-300
                                    ${openId === items.id ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}
                                `}
                            ></i>

                        </p>

                        {/* Answer */}
                        <p
                            className={`
                                text-white/60 text-[13px] sm:text-[15px] font-space font-normal tracking-tight
                                overflow-hidden transition-all duration-300
                                ${openId === items.id ? "opacity-100 mt-3 h-auto" : "opacity-0 h-0"}
                            `}
                        >
                            {items.para}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default FAQ
