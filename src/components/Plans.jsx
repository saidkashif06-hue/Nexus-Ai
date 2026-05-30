import React from 'react'

const starterFeatures = [
  'Up to 10 team members',
  '5GB cloud storage',
  'Basic analytics',
  'Email support',
  'Standard security',
]

const proFeatures = [
  'Unlimited team members',
  '100GB cloud storage',
  'Advanced analytics',
  'Priority 24/7 support',
  'Enhanced security',
  'Custom integrations',
  'API access',
]

const enterpriseFeatures = [
  'Unlimited everything',
  'Dedicated infrastructure',
  'Custom analytics',
  'Dedicated support team',
  'Advanced security suite',
  'White-label options',
  'SLA guarantee',
]

const FeatureItem = ({ text, muted = false }) => (
  <div className="flex items-start gap-3">
    <i className="ri-check-line text-cyan-400 text-base mt-0.5 flex-shrink-0" />
    <p className={`text-sm sm:text-base ${muted ? 'text-gray-300' : 'text-gray-200'}`}>{text}</p>
  </div>
)

const Plans = () => {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <p className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-space font-bold mb-12 sm:mb-16 hover:underline decoration-0 underline-offset-14 cursor-pointer decoration-amber-100">
        Choose Your Plan
      </p>

      {/* 
        default (mobile) : 1 col  — all cards stacked
        sm (640px)       : 1 col  — still stacked, just wider padding
        md (768px)       : 3 col  — side by side, Pro centered & scaled
        lg (1024px)      : 3 col  — more gap, Pro scaled larger
      */}
      <div className="w-full max-w-md md:max-w-6xl  grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 md:items-center py-4 mx-auto">

        {/* ── Starter ── */}
        <div className="bg-[#111827] border border-cyan-500/30 rounded-3xl py-8 px-7 sm:py-10 sm:px-10 flex flex-col h-full">
          <h3 className="text-white text-2xl sm:text-3xl font-bold font-space">Starter</h3>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-white text-4xl sm:text-5xl font-bold">$29</span>
            <span className="text-gray-400 text-sm sm:text-base">/month</span>
          </div>

          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:gap-4 flex-1">
            {starterFeatures.map((f) => (
              <FeatureItem key={f} text={f} muted />
            ))}
          </div>

          <button className="w-full mt-8 sm:mt-10 py-3 rounded-xl cursor-pointer bg-white/10 border border-white/10 text-white text-sm sm:text-base hover:bg-white/20 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* ── Pro (featured) ── */}
        <div className="relative bg-gradient-to-b from-[#0F172A] to-[#2E1065] border border-cyan-400 rounded-3xl py-8 px-7 sm:py-10 sm:px-10 md:scale-105 shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col h-full">

          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-cyan-400 to-purple-500 whitespace-nowrap">
            Most Popular
          </span>

          <h3 className="text-white text-2xl sm:text-3xl font-bold font-space">Pro</h3>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-white text-4xl sm:text-5xl font-bold">$99</span>
            <span className="text-gray-300 text-sm sm:text-base">/month</span>
          </div>

          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:gap-4 flex-1">
            {proFeatures.map((f) => (
              <FeatureItem key={f} text={f} />
            ))}
          </div>

          <button className="w-full mt-8 sm:mt-10 py-3 rounded-xl text-white bg-gradient-to-r from-cyan-400 to-purple-500 cursor-pointer hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
            Start Free Trial
          </button>
        </div>

        {/* ── Enterprise ── */}
        <div className="bg-[#111827] border border-cyan-500/30 rounded-3xl py-8 px-7 sm:py-10 sm:px-10 flex flex-col h-full">
          <h3 className="text-white text-2xl sm:text-3xl font-bold font-space">Enterprise</h3>

          <div className="mt-4">
            <span className="text-white text-3xl sm:text-4xl font-bold">Custom</span>
          </div>

          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:gap-4 flex-1">
            {enterpriseFeatures.map((f) => (
              <FeatureItem key={f} text={f} muted />
            ))}
          </div>

          <button className="w-full mt-8 sm:mt-10 py-3 rounded-xl cursor-pointer bg-white/10 border border-white/10 text-white text-sm sm:text-base hover:bg-white/20 transition-all duration-300">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  )
}

export default Plans
