'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  tier: string
  price: string
  annualPrice?: string
  period?: string
  desc: string
  features: string[]
  cta?: string
  popular?: boolean
  isAnnual?: boolean
  index?: number
}

export default function PricingCard({
  tier,
  price,
  annualPrice,
  period = '/mo',
  desc,
  features,
  cta = 'Get Started',
  popular = false,
  isAnnual = false,
  index = 0,
}: Props) {
  const displayPrice = isAnnual && annualPrice ? annualPrice : price

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative ${popular ? 'pricing-card-popular' : 'glass'} p-8`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-orange-500 text-white text-xs font-sans font-bold px-4 py-1 rounded-full uppercase tracking-widest">
            Most Popular
          </span>
        </div>
      )}

      <div className="font-sans text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">{tier}</div>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-sans text-white text-4xl font-bold">{displayPrice}</span>
        <span className="text-slate-500 text-sm">{period}</span>
      </div>
      {isAnnual && annualPrice && (
        <div className="text-green-400 text-xs mb-1">Save 20% with annual billing</div>
      )}
      <p className="text-slate-400 text-sm mb-6">{desc}</p>

      <ul className="space-y-2.5 mb-8">
        {features.map(f => (
          <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
            <div className="w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                <path d="M2 6l2.5 2.5L10 3.5" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {f}
          </li>
        ))}
      </ul>

      <Link href="/contact"
        className={`block text-center py-3 rounded-full font-sans font-semibold text-sm transition-all ${
          popular ? 'bg-orange-500 text-white hover:bg-orange-400' : 'border border-white/20 text-white hover:bg-white/5'
        }`}>
        {cta}
      </Link>
    </motion.div>
  )
}
