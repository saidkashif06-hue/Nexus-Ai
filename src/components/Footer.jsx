import React, { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Plans', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
  { label: 'About', href: '#about' },
]

const partners = [
  { name: 'Google', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Stripe', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 lg:px-8 pt-14 pb-8 flex flex-col items-center gap-12">

      {/* ── Partners ── */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-5">
        <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest font-space">
          Trusted by teams using
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <img
                src={p.icon}
                alt={p.name}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain invert"
              />
              <span className="text-gray-400 text-[11px] sm:text-xs font-space">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="w-full max-w-5xl border-t border-white/10" />

      {/* ── Main footer body ── */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">

        {/* Brand + tagline */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <p className="text-white text-2xl font-space font-bold">
            Nexus<span className="text-cyan-400">AI</span>
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Next-generation AI platform built for teams who move fast and build things that matter.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-1">
            {['ri-twitter-x-line', 'ri-github-line', 'ri-linkedin-line', 'ri-discord-line'].map((icon) => (
              <i
                key={icon}
                className={`${icon} text-gray-400 text-lg hover:text-cyan-400 cursor-pointer transition-colors duration-300`}
              />
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-space font-semibold text-sm mb-1">Navigation</p>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300 w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-space font-semibold text-sm mb-1">Newsletter</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Get the latest updates, articles and resources straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 mt-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 outline-none focus:border-cyan-500/60 transition-all duration-300"
            />
            <button
              onClick={handleSubscribe}
              className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold font-space bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 active:scale-[0.98] transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              {subscribed ? '✓ Done!' : 'Subscribe'}
            </button>
          </div>
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="w-full max-w-5xl border-t border-white/10" />

      {/* ── Bottom bar ── */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs font-space">
        <p>© {new Date().getFullYear()} NovaAI. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Cookie Policy</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
