'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  icon: string | ReactNode
  title: string
  desc: string
  index?: number
}

export default function FeatureCard({ icon, title, desc, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(249,115,22,0.2)' }}
      className="glass p-6 transition-all cursor-default"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-sans text-white font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}
