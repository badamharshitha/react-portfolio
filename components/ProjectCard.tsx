'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl: string
}

export default function ProjectCard({ title, description, tech, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.article whileHover={{ y: -8 }} className="glass-card flex min-h-[300px] flex-col justify-between rounded-[2rem] border border-slate-700/70 p-6 shadow-soft">
      <div>
        <img
  src="https://thf.bing.com/th/id/OIP.idIyJFOL0JC_EtnP7k-4iAAAAA?w=205&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.4&pid=1.7&rm=3"
  alt="Project Image"
  className="mb-4 h-48 w-full rounded-3xl object-cover"
/>
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/15">
          GitHub
        </a>
        <a href={liveUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-cyan-100 transition hover:bg-violet-500/20">
          Live Demo
        </a>
      </div>
    </motion.article>
  )
}
