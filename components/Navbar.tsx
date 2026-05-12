'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 mx-auto w-full border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          Nikhila Sri Harshitha Badam 
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-200 transition hover:border-slate-500 hover:text-white md:hidden"
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-[#070b1a]/95 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-base text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}
