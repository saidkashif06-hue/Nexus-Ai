import React from 'react'
import { index } from '../assets'

const User = () => {
  return (
    <section className='w-full lg:h-210 md:h-150   lg:py-5'>
      <img src={index.user_img} className='w-full' alt="" />
    </section>
  )
}

export default User
