'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-dark min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 text-center">
        <div className="container mx-auto px-6">
          <span className="text-orange text-xs font-bold tracking-widest uppercase block mb-3">Contact</span>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl text-white mb-4">Get in Touch</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">Questions? We'd love to hear from you. Send us a message and we'll respond within a few hours.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-white font-semibold text-xs uppercase tracking-wider block mb-2">Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full bg-dark-700 border border-white/10 focus:border-orange/40 text-white px-4 py-3.5 rounded-xl outline-none transition-colors text-sm"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-white font-semibold text-xs uppercase tracking-wider block mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full bg-dark-700 border border-white/10 focus:border-orange/40 text-white px-4 py-3.5 rounded-xl outline-none transition-colors text-sm"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-white font-semibold text-xs uppercase tracking-wider block mb-2">Subject</label>
                    <input type="text" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                      className="w-full bg-dark-700 border border-white/10 focus:border-orange/40 text-white px-4 py-3.5 rounded-xl outline-none transition-colors text-sm"
                      placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="text-white font-semibold text-xs uppercase tracking-wider block mb-2">Message *</label>
                    <textarea required rows={6} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full bg-dark-700 border border-white/10 focus:border-orange/40 text-white px-4 py-3.5 rounded-xl outline-none transition-colors text-sm resize-none"
                      placeholder="Your message..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-orange hover:bg-orange-dark text-white font-bold rounded-xl text-sm transition-all shadow-orange-glow">
                    Send Message →
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center">
                  <div className="text-5xl mb-4">💌</div>
                  <h3 className="font-sans font-bold text-white text-2xl mb-3">Message Sent!</h3>
                  <p className="text-muted">We'll get back to you within a few hours. Thanks!</p>
                </motion.div>
              )}
            </div>

            <div className="space-y-5">
              {[
                { icon: '📧', label: 'Email', value: 'hello@friendlymemos.com' },
                { icon: '💬', label: 'Live Chat', value: 'Available 9am–6pm EST' },
                { icon: '🕐', label: 'Response Time', value: 'Usually within 2 hours' },
              ].map(item => (
                <div key={item.label} className="glass rounded-2xl p-6 flex gap-4 items-center">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <div className="text-muted text-xs uppercase tracking-wider">{item.label}</div>
                    <div className="text-white font-medium mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
              <div className="glass rounded-2xl p-6">
                <div className="text-orange font-bold text-sm mb-2 italic">"Friendliness Encourages Greatest"</div>
                <p className="text-muted text-sm leading-relaxed">We built Friendly Memos because staying connected matters. We're here to help you do that — and we mean it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
