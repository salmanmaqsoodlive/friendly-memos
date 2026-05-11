import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Friendly Memos | Friendliness Encourages Greatest',
  description: 'Never miss what matters most. Friendly Memos sends thoughtful birthday wishes, anniversary messages, and encouragements automatically on your behalf.',
  keywords: 'automated messages, birthday reminders, anniversary messages, encouragements, relationship management, thoughtful reminders',
  openGraph: {
    title: 'Friendly Memos | Never Miss What Matters Most',
    description: 'Automated thoughtful messaging — stay connected with everyone who matters.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-dark font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
