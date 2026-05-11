import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How It Works | Friendly Memos',
  description: 'Set up Friendly Memos in minutes. Sync contacts, set occasions, and send messages that actually feel personal.',
}

const steps = [
  {
    num: '01',
    title: 'Import Your Contacts',
    desc: 'Connect your phone, Google Contacts, or upload a CSV. Friendly Memos securely imports your contact list and immediately begins identifying birthdays, anniversaries, and other key dates.',
    detail: 'Works with iPhone, Android, Google, Outlook, and any CSV file.',
    img: '📥',
  },
  {
    num: '02',
    title: 'Set Occasions & Preferences',
    desc: 'Tell us what matters to you. Configure which events trigger messages, how far in advance to receive reminders, and your preferred message style — warm, professional, or playful.',
    detail: 'Customize everything, or let our smart defaults handle it for you.',
    img: '⚙️',
  },
  {
    num: '03',
    title: 'Choose Your Templates',
    desc: 'Browse our library of 500+ message templates organized by occasion, relationship type, and tone. Customize them to sound like you — or let our AI write something fresh.',
    detail: 'Every message can be edited before sending.',
    img: '✍️',
  },
  {
    num: '04',
    title: 'Schedule or Auto-Send',
    desc: 'Review upcoming occasions and approve messages with one click, or enable Auto-Send to let Friendly Memos handle everything automatically on your behalf.',
    detail: 'You always stay in control — pause or edit anytime.',
    img: '⏰',
  },
  {
    num: '05',
    title: 'Watch Relationships Strengthen',
    desc: 'Track who you\'ve reached out to, see who replied, and get monthly insights on your relationship health. The people you care about will notice.',
    detail: 'Analytics and engagement tracking built in.',
    img: '💛',
  },
]

const useCases = [
  { title: 'Personal Use', icon: '👤', desc: 'Stay connected with friends, family, and old colleagues without the mental load of remembering every important date.' },
  { title: 'Small Business', icon: '🏪', desc: 'Send birthday messages to clients, follow up after meetings, and nurture customer relationships at scale.' },
  { title: 'Real Estate Agents', icon: '🏠', desc: 'Remember every client\'s home anniversary, birthday, and lifecycle event. Build referral relationships that last.' },
  { title: 'Sales Professionals', icon: '💼', desc: 'Personalize outreach, never miss a prospect\'s milestone, and stay top-of-mind without being pushy.' },
]

export default function HowItWorks() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="font-sans text-orange-400 text-xs tracking-[0.4em] uppercase block mb-4">Simple by Design</span>
          <h1 className="font-sans text-5xl md:text-7xl text-white font-bold mb-4">
            How It Works
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Set up in under 5 minutes. Then let Friendly Memos do the heavy lifting.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-16 mb-24">
            {steps.map((step, i) => (
              <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`flex items-center justify-center ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="glass p-12 rounded-3xl text-center w-full max-w-xs">
                    <div className="text-7xl mb-4">{step.img}</div>
                    <div className="font-sans text-orange-400 text-4xl font-bold">{step.num}</div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="font-sans text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">Step {step.num}</div>
                  <h2 className="font-sans text-3xl text-white font-bold mb-4">{step.title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-4">{step.desc}</p>
                  <p className="text-orange-400/80 text-sm italic">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-sans text-3xl text-white font-bold text-center mb-12">Who Uses Friendly Memos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {useCases.map(u => (
              <div key={u.title} className="glass p-7 text-center hover:border-orange-500/20 transition-all">
                <div className="text-4xl mb-3">{u.icon}</div>
                <h3 className="font-sans text-white font-bold mb-2">{u.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-orange p-12 text-center rounded-2xl">
            <h3 className="font-sans text-white text-3xl font-bold mb-3">Try It Free for 14 Days</h3>
            <p className="text-slate-300 mb-8">No credit card. No commitment. Just better relationships.</p>
            <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-orange-500 text-white rounded-full font-sans font-bold hover:bg-orange-400 transition-all text-sm uppercase tracking-widest">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
