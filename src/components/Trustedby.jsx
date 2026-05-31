import React from 'react'
import { index } from '../assets'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechVision',
    avatar: index.pic_2,
    text: 'This platform transformed how we handle automation. The AI capabilities are truly next-generation and have saved us countless hours.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering at CloudScale',
    avatar: index.pic_1,
    text: 'Exceptional performance and reliability. The real-time analytics give us insights we never had before. Highly recommended!',
  },
  {
    name: 'Emily Thompson',
    role: 'Product Lead at InnovateLabs',
    avatar: index.pic_3,
    text: 'The workflow management features are intuitive and powerful. Our team productivity increased by 40% in the first month.',
  },
]

const avatarColors = [
  'bg-cyan-500/20 text-cyan-400',
  'bg-purple-500/20 text-purple-400',
  'bg-amber-500/20 text-amber-400',
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 w-full h-285 sm:h-295 md:h-150 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      {/* Heading */}
        <p className='font-space font-bold text-white md:text-[45px] text-[35px] lg:text-5xl text-center'>Trusted By Industry Leader</p>

      {/* Cards grid — 1 col mobile/sm, 3 col md+ */}
      <div className="w-full max-w-md md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 py-12 lg:py-20">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="bg-[#111827] border border-white/10 cursor-pointer hover:scale-103  rounded-3xl p-7 sm:p-8 flex flex-col gap-5 transition-all duration-300"
          >
            {/* Avatar */}
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-sm sm:text-base font-bold flex-shrink-0 ${avatarColors[i]}`}
            >
              <img src={t.avatar} alt="" />
            </div>

            {/* Quote */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1 font-space">
              {t.text}
            </p>

            {/* Author */}
            <div>
              <p className="text-white font-semibold text-sm sm:text-base font-space">{t.name}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5 font-space">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
