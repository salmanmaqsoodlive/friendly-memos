import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Features | Friendly Memos',
  description: 'Everything you need to keep in touch — automated messages, smart scheduling, personalization, and more.',
}

const features = [
  {
    icon: '🔔',
    title: 'Smart Occasion Detection',
    desc: 'Friendly Memos automatically detects birthdays, anniversaries, work milestones, and other meaningful dates across your contact list. Never miss what matters.',
    details: ['Birthday & anniversary tracking', 'Work milestone detection', 'Custom occasion creation', 'Recurring event support', 'Calendar sync (Google, Apple, Outlook)'],
  },
  {
    icon: '✍️',
    title: 'Personalized Message Templates',
    desc: 'Choose from hundreds of warm, thoughtful templates or craft your own. Our AI assistant helps you write messages that feel genuinely personal.',
    details: ['500+ message templates', 'AI writing assistant', 'Custom message library', 'Tone settings (warm/formal/playful)', 'Multi-language support'],
  },
  {
    icon: '⏰',
    title: 'Intelligent Scheduling',
    desc: 'Set it and forget it. Schedule messages days, weeks, or months in advance. Adjust delivery time for the recipient\'s timezone automatically.',
    details: ['Advance scheduling', 'Timezone-aware delivery', 'Optimal timing suggestions', 'Snooze & reschedule', 'Bulk scheduling tools'],
  },
  {
    icon: '📱',
    title: 'Multi-Channel Delivery',
    desc: 'Send via SMS, email, WhatsApp, or direct social messages. Choose the channel that reaches your recipient best — or send across all of them.',
    details: ['SMS / text messaging', 'Email delivery', 'WhatsApp integration', 'Social media direct messages', 'Push notification option'],
  },
  {
    icon: '👥',
    title: 'Contact Management',
    desc: 'Organize your contacts into groups, tag them by relationship type, and track your communication history with each person over time.',
    details: ['Group & tagging', 'Relationship categories', 'Communication history log', 'Note-taking per contact', 'Import from phone/CSV'],
  },
  {
    icon: '📊',
    title: 'Engagement Analytics',
    desc: 'See who opened your messages, who replied, and how often you\'re communicating with the people who matter most in your life.',
    details: ['Open & read receipts', 'Reply tracking', 'Communication frequency', 'Relationship health score', 'Weekly digest reports'],
  },
  {
    icon: '🔒',
    title: 'Privacy & Security',
    desc: 'Your contact data is yours. We never sell or share your information. Enterprise-grade encryption protects every message you send.',
    details: ['End-to-end encryption', 'No data selling, ever', 'GDPR & CCPA compliant', 'Two-factor authentication', 'Data export anytime'],
  },
  {
    icon: '🤖',
    title: 'AI Relationship Coach',
    desc: 'Our AI analyzes your communication patterns and gently suggests who you might be losing touch with — then helps you reconnect naturally.',
    details: ['Drift detection alerts', 'Reconnection prompts', 'Conversation starters', 'Relationship gap analysis', 'Weekly coaching digest'],
  },
]

export default function Features() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="font-sans text-orange-400 text-xs tracking-[0.4em] uppercase block mb-4">Everything You Need</span>
          <h1 className="font-sans text-5xl md:text-7xl text-white font-bold mb-4">
            Features
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Built around one simple idea: staying connected with the people you care about should feel effortless.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((f, i) => (
              <div key={f.title} className="glass p-8 hover:border-orange-500/20 transition-all group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-sans text-white text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-5">{f.desc}</p>
                <ul className="space-y-2">
                  {f.details.map(d => (
                    <li key={d} className="flex items-center gap-2 text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-400/60 rounded-full" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-orange p-12 text-center rounded-2xl">
            <h3 className="font-sans text-white text-3xl font-bold mb-3">Ready to stay connected?</h3>
            <p className="text-slate-300 mb-8 max-w-md mx-auto">Start your free 14-day trial. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full font-sans font-semibold hover:bg-orange-400 transition-all">
                Start Free Trial
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-sans font-semibold hover:bg-white/5 transition-all">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
