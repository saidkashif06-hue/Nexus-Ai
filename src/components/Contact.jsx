import React, { useState } from 'react'

const Contact = () => {

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // hook up your API / emailjs here
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      {/* Heading */}
      <p className="text-white text-3xl sm:text-4xl md:text-5xl font-space font-bold text-center mb-3">
        Get In Touch
      </p>
      <p className="text-gray-400 text-sm sm:text-base text-center mb-10 sm:mb-14 max-w-md">
        Have a question or want to work together? Fill out the form below and we'll get back to you shortly.
      </p>

      {/* Form card */}
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto bg-[#111827] border border-white/10 rounded-3xl p-7 sm:p-10">

        <div className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-space font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base placeholder-gray-500 outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-space font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base placeholder-gray-500 outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-space font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base placeholder-gray-500 outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl text-white font-space font-semibold text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 active:scale-[0.98] transition-all duration-300 cursor-pointer mt-1"
          >
            {sent ? '✓ Message Sent!' : 'Send Message'}
          </button>

        </div>
      </div>
    </section>
  )
}

export default Contact
