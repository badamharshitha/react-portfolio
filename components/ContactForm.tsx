'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCopy, FaEnvelope, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'

interface ContactFormProps {
  email: string
  linkedIn: string
  phone: string
}

export default function ContactForm({ email, linkedIn, phone }: ContactFormProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft">
        <h3 className="mb-4 text-2xl font-semibold text-white">Get in touch</h3>
        <p className="mb-8 text-slate-300">I’m available for internships, freelance work, and collaborations. Send a message and let’s build something outstanding together.</p>
        <div className="space-y-5 text-sm text-slate-300">
          <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
            <FaEnvelope className="mt-1 text-cyan-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Email</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
            <FaLinkedin className="mt-1 text-violet-400" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-violet-300">LinkedIn</p>
              <a href={linkedIn} target="_blank" rel="noreferrer" className="text-slate-100 hover:text-white">
                {linkedIn.replace('https://', '')}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
            <FaPhoneAlt className="mt-1 text-emerald-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Phone</p>
              <p>{phone}</p>
            </div>
          </div>
        </div>
        <button onClick={handleCopy} className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          <FaCopy />
          {copied ? 'Copied!' : 'Copy email'}
        </button>
      </div>

      <form className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft">
        <div className="space-y-6">
          <label className="block text-sm text-slate-300">Your Name</label>
          <input className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" placeholder="Jane Doe" type="text" />
          <label className="block text-sm text-slate-300">Email</label>
          <input className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" placeholder="janedoe@email.com" type="email" />
          <label className="block text-sm text-slate-300">Message</label>
          <textarea className="h-40 w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" placeholder="Tell me about your next project."></textarea>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  )
}
