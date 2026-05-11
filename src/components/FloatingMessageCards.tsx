'use client'

import { motion } from 'framer-motion'

const messages = [
  { type: '🎂', title: 'Happy Birthday!', body: "Wishing you all the best on your special day. Hope it's filled with joy!", time: 'Just now', color: 'from-orange-500/20 to-orange-500/5' },
  { type: '💍', title: 'Happy Anniversary!', body: 'Thinking of you both today. Five wonderful years — here\'s to many more!', time: '2 min ago', color: 'from-purple-500/20 to-purple-500/5' },
  { type: '✨', title: 'Thinking of You', body: "It's been a while — just wanted to check in and say hello!", time: '5 min ago', color: 'from-pink-500/20 to-pink-500/5' },
]

export default function FloatingMessageCards() {
  return (
    <div className="relative h-80 flex items-center justify-center">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          className={`absolute w-64 bg-gradient-to-br ${msg.color} border border-white/10 rounded-2xl p-4 backdrop-blur-sm`}
          style={{
            top: `${i * 20}%`,
            left: `${i * 8 - 8}%`,
            zIndex: messages.length - i,
          }}
          initial={{ opacity: 0, y: 30, rotate: (i - 1) * 3 }}
          animate={{ opacity: 1, y: [0, -5, 0], rotate: (i - 1) * 3 }}
          transition={{
            opacity: { duration: 0.5, delay: i * 0.15 },
            y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 },
          }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">{msg.type}</div>
            <div className="flex-1 min-w-0">
              <div className="font-sans text-white text-sm font-bold">{msg.title}</div>
              <div className="text-slate-400 text-xs mt-0.5 leading-relaxed line-clamp-2">{msg.body}</div>
              <div className="text-orange-400/60 text-xs mt-2">{msg.time}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
