'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]/95 py-12">
      <div className="container mx-auto flex flex-col gap-8 px-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm">© {new Date().getFullYear()} Nikhila Sri Harshitha Badam. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
            <FaTwitter />
          </a>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white">
            <FaArrowUp />
            Top
          </a>
        </div>
      </div>
    </footer>
  )
}
