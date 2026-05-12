'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/80">{subtitle}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </motion.div>
  )
}
