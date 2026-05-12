'use client'

import { motion } from 'framer-motion'

interface TimelineItemProps {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export default function TimelineItem({ title, company, period, responsibilities }: TimelineItemProps) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-2 text-sm text-cyan-300">
        <span>{period}</span>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">Internship</span>
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mb-4 text-sm text-slate-400">{company}</p>
      <ul className="space-y-3 text-sm leading-7 text-slate-300">
        {responsibilities.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 text-cyan-300">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
