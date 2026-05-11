'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const tiers = [
  {
    name: 'Starter',
    monthlyPrice: 9,
    desc: 'Perfect for personal use',
    color: '#ff9a3c',
    features: [
      '25 contacts',
      'Birthday reminders',
      'Basic templates (10+)',
      'Email delivery',
      'Monthly scheduling',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    monthlyPrice: 19,
    desc: 'Most popular for relationship builders',
    color: '#ff6b2b',
    features: [
      '100 contacts',
      'All reminder types',
      'Custom templates (50+)',
      'SMS + Email delivery',
      'Advanced scheduling',
      'Message customization',
      'Analytics dashboard',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Business',
    monthlyPrice: 49,
    desc: 'For teams and organizations',
    color: '#00d9a6',
    features: [
      'Unlimited contacts',
      'All features included',
      'All delivery channels',
      'Team management (5 users)',
      'Custom branding',
      'API access',
      'CRM integrations',
      'Dedicated account manager',
      'SLA support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  { q: 'Can I cancel anytime?', a: 'Yes, cancel anytime with no fees or penalties. Your account stays active until the end of your billing period.' },
  { q: 'Is there a free trial?', a: 'Yes! All plans include a 14-day free trial with no credit card required.' },
  { q: 'How are messages delivered?', a: 'Messages are delivered via email on all plans, and SMS/WhatsApp on Professional and Business plans.' },
  { q: 'Can I upgrade or downgrade?', a: 'Absolutely. You can change your plan at any time and we\'ll prorate the difference.' },
  { q: 'What if I go over my contact limit?', a: 'We\'ll notify you when you\'re approaching your limit and give you easy options to upgrade.' },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <main className="bg-dark min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 text-center">
        <div className="container mx-auto px-6">
          <span className="text-orange text-xs font-bold tracking-widest uppercase block mb-3">Pricing</span>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl text-white mb-4">Simple Pricing</h1>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">No hidden fees. No surprises. Just straightforward pricing that grows with you.</p>
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-muted'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-orange' : 'bg-dark-600'}`}>
              <motion.div animate={{ x: annual ? 24 : 2 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }} className="w-5 h-5 bg-white rounded-full absolute top-0.5" />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-muted'}`}>
              Annual <span className="text-orange font-bold text-xs ml-1">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 relative ${tier.popular ? 'pricing-card-popular scale-105' : 'glass'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-orange text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-orange-glow">MOST POPULAR</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-sans font-bold text-white text-xl mb-1">{tier.name}</h3>
                  <p className="text-muted text-sm">{tier.desc}</p>
                </div>
                <div className="flex items-end gap-1 mb-8">
                  <span className="font-sans font-black text-white text-6xl">
                    ${annual ? Math.round(tier.monthlyPrice * 0.8) : tier.monthlyPrice}
                  </span>
                  <div className="mb-2 text-muted">
                    <div className="text-xs">per</div>
                    <div className="text-xs">month</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${tier.color}20` }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5" style={{ color: tier.color }}>
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3.5 text-center font-bold text-sm rounded-xl transition-all ${
                    tier.popular ? 'bg-orange hover:bg-orange-dark text-white shadow-orange-glow' : 'border border-white/10 text-white hover:border-white/20'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-sans font-extrabold text-3xl text-white text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="font-sans font-bold text-white text-base mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
