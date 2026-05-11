'use client'

import { motion } from 'framer-motion'

interface Message {
  from?: string
  text: string
  time: string
  isUser?: boolean
}

interface Props {
  messages: Message[]
  contactName?: string
  contactEmoji?: string
}

const defaultMessages: Message[] = [
  { from: 'Friendly Memos', text: "Hey! Just wanted to wish your friend Sarah a happy birthday 🎂 — sending now!", time: '9:00 AM' },
  { from: 'Sarah', text: "OMG thank you so much!! This made my whole morning 😭💛", time: '9:04 AM', isUser: true },
  { from: 'You', text: "Of course! Have the best day 🎉", time: '9:05 AM' },
]

export default function MessagePreview({
  messages = defaultMessages,
  contactName = 'Sarah',
  contactEmoji = '👩',
}: Props) {
  return (
    <div className="w-72 bg-gray-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Status bar */}
      <div className="bg-gray-800 px-5 py-3 flex items-center gap-3">
        <div className="text-2xl">{contactEmoji}</div>
        <div>
          <div className="text-white text-sm font-semibold">{contactName}</div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            Online
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 bg-gray-950 min-h-48">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-48 rounded-2xl px-3 py-2 text-xs ${
              msg.isUser ? 'bg-orange-500 text-white rounded-br-sm' : 'bg-gray-800 text-gray-200 rounded-bl-sm'
            }`}>
              {!msg.isUser && msg.from && (
                <div className="text-orange-400 text-[10px] font-semibold mb-0.5">{msg.from}</div>
              )}
              {msg.text}
              <div className={`text-[9px] mt-1 ${msg.isUser ? 'text-white/60' : 'text-gray-500'}`}>{msg.time}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-gray-900 px-3 py-2 flex items-center gap-2 border-t border-white/5">
        <div className="flex-1 bg-gray-800 rounded-full px-3 py-1.5 text-gray-500 text-xs">
          Type a message...
        </div>
        <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
