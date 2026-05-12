'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SkillCardProps {
  label: string
  icon: ReactNode
}

export default function SkillCard({ label, icon }: SkillCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} className="glass-card relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-soft transition duration-300 hover:border-cyan-400/30">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyan-300">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{label}</h3>
    </motion.div>
  )
}
