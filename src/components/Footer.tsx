import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-orange rounded-xl flex items-center justify-center shadow-orange-glow">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="white" strokeWidth="2"/>
                  <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="font-sans font-bold text-lg text-white">Friendly<span className="text-orange">Memos</span></span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-5">
              Never miss what matters most. Automated thoughtful messages to keep every relationship strong.
            </p>
            <p className="text-orange text-sm font-semibold italic">"Friendliness Encourages Greatest"</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {['Features','How It Works','Pricing','Integrations','Changelog','Status'].map((item) => (
                <li key={item}>
                  <Link href="/features" className="text-muted text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Use Cases</h4>
            <ul className="space-y-3">
              {['Personal Use','Small Business','HR Teams','Non-Profits','Entrepreneurs','Senior Care'].map((item) => (
                <li key={item}>
                  <Link href="/how-it-works" className="text-muted text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {['About','Blog','Contact','Privacy Policy','Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="/contact" className="text-muted text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/pricing"
                className="inline-block px-5 py-2.5 bg-orange hover:bg-orange-dark text-white text-sm font-semibold rounded-xl transition-colors shadow-orange-glow"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted/50 text-sm">
            © {new Date().getFullYear()} Friendly Memos. Made with ❤️ to help you stay connected.
          </p>
          <p className="text-muted/40 text-xs">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
