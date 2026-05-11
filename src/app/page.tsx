'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1800, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const floatingMessages = [
  {
    type: 'birthday',
    emoji: '🎂',
    name: 'Sarah Johnson',
    preview: "Happy Birthday! Wishing you an incredible day...",
    time: 'Just now',
    color: '#ff6b2b',
  },
  {
    type: 'anniversary',
    emoji: '💕',
    name: 'Tom & Jane',
    preview: "Happy 5th Anniversary! You two are amazing...",
    time: '2m ago',
    color: '#ff9a3c',
  },
  {
    type: 'encouragement',
    emoji: '💪',
    name: 'Michael',
    preview: "You've got this! Thinking of you today...",
    time: '1h ago',
    color: '#00d9a6',
  },
]

const features = [
  {
    icon: '🎂',
    title: 'Birthday Reminders',
    desc: 'Automatically send warm, personalized birthday wishes to everyone who matters.',
  },
  {
    icon: '💕',
    title: 'Anniversary Messages',
    desc: 'Celebrate milestones and relationship anniversaries without missing a single date.',
  },
  {
    icon: '💪',
    title: 'Encouragements',
    desc: 'Send motivational notes and support messages when your people need them most.',
  },
  {
    icon: '📅',
    title: 'Event Reminders',
    desc: 'Never forget important personal or professional dates and occasions.',
  },
  {
    icon: '✍️',
    title: 'Custom Templates',
    desc: 'Your voice, your style — completely customizable message templates.',
  },
  {
    icon: '📱',
    title: 'Multi-Channel',
    desc: 'Deliver messages via SMS, email, or your preferred communication platform.',
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: 9,
    desc: 'Perfect for personal use',
    features: ['25 contacts', 'Basic templates', 'Email delivery', 'Birthday reminders', 'Email support'],
    popular: false,
    cta: 'Start Free',
  },
  {
    name: 'Professional',
    price: 19,
    desc: 'For the relationship-focused',
    features: ['100 contacts', 'Custom templates', 'SMS + Email delivery', 'All reminder types', 'Priority support', 'Analytics'],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Business',
    price: 49,
    desc: 'For teams and organizations',
    features: ['Unlimited contacts', 'All features', 'All delivery channels', 'Team management', 'API access', 'Dedicated support'],
    popular: false,
    cta: 'Contact Sales',
  },
]

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [annual, setAnnual] = useState(false)
  const [visibleCard, setVisibleCard] = useState(0)

  useEffect(() => {
    setLoaded(true)
    const t = setInterval(() => setVisibleCard(c => (c + 1) % floatingMessages.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="overflow-x-hidden bg-dark">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
        {/* Background orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-orange/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-orange-amber/6 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 px-4 py-2 rounded-full mb-6"
              >
                <div className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
                <span className="text-orange text-xs font-semibold tracking-widest uppercase">Friendliness Encourages Greatest</span>
              </motion.div>

              {['Never Miss', 'What Matters', 'Most.'].map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: 80 }}
                    animate={loaded ? { y: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.18 }}
                    className={`font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight ${
                      i === 2 ? 'text-orange-gradient' : 'text-white'
                    }`}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="text-muted text-lg leading-relaxed mt-6 mb-10 max-w-lg"
              >
                Friendly Memos sends thoughtful birthday wishes, anniversary messages, and encouragements automatically on your behalf — so every relationship stays strong.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange hover:bg-orange-dark text-white font-bold text-base rounded-xl transition-all shadow-orange-glow hover:-translate-y-0.5"
                >
                  Start Free Trial →
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-muted hover:text-white hover:border-white/20 font-medium text-base rounded-xl transition-all"
                >
                  See How It Works
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={loaded ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
                className="mt-10 flex items-center gap-6"
              >
                <div className="flex -space-x-2">
                  {['👤','👤','👤','👤'].map((a, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-dark-600 border-2 border-dark flex items-center justify-center text-xs">{a}</div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-orange text-sm">{'★★★★★'}</div>
                  <span className="text-muted text-xs"><strong className="text-white">5,000+</strong> relationships strengthened</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating notification cards */}
            <div className="relative h-96 lg:h-[500px]">
              {floatingMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  className="notification-card absolute"
                  style={{
                    top: `${15 + i * 28}%`,
                    left: i % 2 === 0 ? '0%' : '15%',
                    zIndex: i === visibleCard ? 10 : 5 - i,
                  }}
                  initial={{ opacity: 0, x: 60 }}
                  animate={loaded ? {
                    opacity: i === visibleCard ? 1 : 0.4,
                    x: 0,
                    y: i === visibleCard ? [0, -6, 0] : 0,
                    scale: i === visibleCard ? 1 : 0.96,
                  } : {}}
                  transition={{
                    opacity: { duration: 0.4 },
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    delay: i * 0.2 + 0.6,
                  }}
                >
                  <div className="flex items-start gap-3 min-w-[280px]">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${msg.color}20` }}>
                      {msg.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-semibold text-sm">{msg.name}</span>
                        <span className="text-muted text-xs">{msg.time}</span>
                      </div>
                      <p className="text-muted text-xs leading-relaxed truncate">{msg.preview}</p>
                      <div className="mt-2 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: msg.color }} />
                        <span className="text-xs capitalize" style={{ color: msg.color }}>{msg.type}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="py-16 bg-dark-800 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: 5000, suf: '+', label: 'Active Users' },
              { val: 250000, suf: '+', label: 'Messages Sent' },
              { val: 98, suf: '%', label: 'Open Rate' },
              { val: 4.9, suf: '/5', label: 'Customer Rating' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-sans font-extrabold text-4xl text-orange-gradient mb-1">
                  <AnimatedCounter target={s.val} suffix={s.suf} />
                </div>
                <div className="text-muted text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-orange text-xs font-bold tracking-widest uppercase block mb-3">Features</span>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-white mb-4">Everything You Need to Stay Connected</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">Powerful tools designed to strengthen every relationship in your life — automatically.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ borderColor: 'rgba(255,107,43,0.3)', y: -4 }}
                className="glass rounded-2xl p-6 cursor-pointer transition-all"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-sans font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-white mb-4">How It Works</h2>
            <p className="text-muted">Up and running in minutes.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Add Contacts & Dates', desc: 'Import or manually add your contacts with their important dates — birthdays, anniversaries, and more.', emoji: '👥' },
              { num: '02', title: 'Customize Messages', desc: 'Choose from our warm templates or write your own. Set your preferred tone and delivery preferences.', emoji: '✍️' },
              { num: '03', title: 'We Handle the Rest', desc: 'Friendly Memos automatically sends your messages at the perfect time — every time.', emoji: '🚀' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-orange rounded-2xl p-8 text-center relative"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-orange/30 text-2xl z-10">→</div>
                )}
                <div className="text-5xl mb-4">{step.emoji}</div>
                <div className="font-sans font-black text-orange/30 text-6xl absolute top-4 right-6">{step.num}</div>
                <h3 className="font-sans font-bold text-white text-xl mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-white mb-4">Simple, Transparent Pricing</h2>
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-muted'}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-orange' : 'bg-dark-600'}`}
              >
                <motion.div
                  animate={{ x: annual ? 24 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="w-5 h-5 bg-white rounded-full absolute top-0.5"
                />
              </button>
              <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-muted'}`}>
                Annual <span className="text-orange text-xs font-bold">Save 20%</span>
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-7 relative ${tier.popular ? 'pricing-card-popular' : 'glass'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
                  </div>
                )}
                <h3 className="font-sans font-bold text-white text-xl mb-1">{tier.name}</h3>
                <p className="text-muted text-sm mb-5">{tier.desc}</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="font-sans font-black text-white text-5xl">
                    ${annual ? Math.round(tier.price * 0.8) : tier.price}
                  </span>
                  <span className="text-muted text-sm mb-2">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                      <div className="w-4 h-4 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 text-orange">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`block w-full py-3 text-center font-bold text-sm rounded-xl transition-all ${
                    tier.popular
                      ? 'bg-orange hover:bg-orange-dark text-white shadow-orange-glow'
                      : 'border border-white/10 text-white hover:border-orange/30'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-dark-800 via-dark to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-5xl mb-6">💌</div>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl text-white mb-4">
              Start Strengthening<br />
              <span className="text-orange-gradient">Relationships Today</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-lg mx-auto">
              Join thousands of people who never miss a meaningful moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email..."
                className="px-6 py-4 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-muted focus:outline-none focus:border-orange/50 w-full sm:w-72"
              />
              <Link
                href="/pricing"
                className="px-8 py-4 bg-orange hover:bg-orange-dark text-white font-bold rounded-xl transition-all shadow-orange-glow"
              >
                Start Free →
              </Link>
            </div>
            <p className="text-muted/50 text-xs mt-4">14-day free trial • No credit card required</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
