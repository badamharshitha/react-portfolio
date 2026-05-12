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
        <div className="mb-4 flex h-48 items-center justify-center rounded-3xl bg-slate-900/80 text-sm text-slate-400">
          Project image placeholder
        </div>
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
