'use client'

import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
}

export default function AnimatedButton({ href, onClick, children }: AnimatedButtonProps) {
  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
      onClick={onClick}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} aria-label="Call to action">
        {content}
      </a>
    )
  }

  return content
}
