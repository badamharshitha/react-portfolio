'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedin, FaJava, FaStar } from 'react-icons/fa'
import { SiJavascript, SiMysql, SiReact, SiMongodb, SiNodedotjs, SiPython, SiHtml5, SiCss3, SiCisco } from 'react-icons/si'
import { GiBrain } from 'react-icons/gi'
import Navbar from '../components/Navbar'
import SectionHeading from '../components/SectionHeading'
import AnimatedButton from '../components/AnimatedButton'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import TimelineItem from '../components/TimelineItem'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const skills = [
  { label: 'Java', icon: <FaJava size={22} /> },
  { label: 'JavaScript', icon: <SiJavascript size={22} /> },
  { label: 'SQL', icon: <SiMysql size={22} /> },
  { label: 'React.js', icon: <SiReact size={22} /> },
  { label: 'MongoDB', icon: <SiMongodb size={22} /> },
  { label: 'Node.js', icon: <SiNodedotjs size={22} /> },
  { label: 'Python', icon: <SiPython size={22} /> },
  { label: 'HTML', icon: <SiHtml5 size={22} /> },
  { label: 'CSS', icon: <SiCss3 size={22} /> },
  { label: 'Git & GitHub', icon: <FaGithub size={22} /> },
  { label: 'Data Structures & Algorithms', icon: <GiBrain size={22} /> },
]

const projects = [
  {
    title: 'BookMate',
    description: 'Student preparation platform for semester preparation, interview preparation, job roadmaps, and study material sharing.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/badamharshitha/Bookmate',
    liveUrl: 'https://badamharshitha.github.io/Bookmate/',
  },
  {
    title: 'Certificate Verification System',
    description: 'AI-based certificate verification system for identifying authentic or fake certificates during placement activities.',
    tech: ['AI', 'JavaScript', 'Node.js'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Senior-Junior Interaction Platform',
    description: 'Communication platform with chatbot support, announcements section, and educational interaction features for student guidance.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/badamharshitha/Sjconnect_main',
    liveUrl: 'https://badamharshitha.github.io/Sjconnect_main/',
  },
]

export default function Home() {
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [countValues, setCountValues] = useState({ python: 0, java: 0, javascript: 0, code: 0 })
  const reduceMotion = useReducedMotion()
  const phrases = ['Full Stack Developer', 'React.js · Node.js · MongoDB', 'Responsive web experiences']

  useEffect(() => {
    if (reduceMotion) {
      setTypedText(phrases[0])
      return
    }

    let active = true
    let charIndex = 0
    let deleting = false

    const updateTyping = () => {
      if (!active) return
      const currentPhrase = phrases[phraseIndex % phrases.length]
      const nextText = deleting ? currentPhrase.slice(0, charIndex - 1) : currentPhrase.slice(0, charIndex + 1)
      setTypedText(nextText)
      charIndex = deleting ? charIndex - 1 : charIndex + 1

      if (!deleting && charIndex === currentPhrase.length) {
        setTimeout(() => (deleting = true), 1200)
      } else if (deleting && charIndex === 0) {
        deleting = false
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }

    const interval = window.setInterval(updateTyping, 100)
    return () => {
      active = false
      window.clearInterval(interval)
    }
  }, [phraseIndex, phrases, reduceMotion])

  useEffect(() => {
    if (reduceMotion) {
      setCountValues({ python: 5, java: 5, javascript: 3, code: 30 })
      return
    }

    const targets = { python: 5, java: 5, javascript: 3, code: 30 }
    const duration = 1200
    const start = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCountValues({
        python: Math.round(targets.python * progress),
        java: Math.round(targets.java * progress),
        javascript: Math.round(targets.javascript * progress),
        code: Math.round(targets.code * progress),
      })
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [reduceMotion])

  return (
    <main id="home" className="relative overflow-hidden">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-8 lg:px-12">
        <div className="hero-blob one" />
        <div className="hero-blob two" />
        <div className="hero-blob three" />

        <div className="container mx-auto flex min-h-[calc(100vh-96px)] flex-col justify-center gap-10 py-12 lg:flex-row lg:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Hello, I’m Nikhila
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              I build elegant digital products with modern web technology.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Aspiring Full Stack Developer with strong foundation in Java, SQL, HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. Passionate about building responsive web applications and solving real-world problems.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <AnimatedButton href="#contact">
                Let’s Collaborate <FaArrowRight className="ml-2" />
              </AnimatedButton>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-5 py-4 shadow-soft">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Now exploring</p>
                <p className="mt-2 text-lg font-semibold text-white">{typedText}<span className="text-cyan-300">|</span></p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
                LinkedIn
              </a>
              <a href="mailto:harshithabadam4@gmail.com" className="text-slate-300 transition hover:text-white">
                Email
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative flex-1">
            <div className="glass-card relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-8 shadow-soft">
              <div className="absolute inset-0 bg-hero-gradient opacity-80" />
              <div className="relative flex h-full flex-col justify-between gap-5">
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Featured</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Modern Portfolio Experience</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Fully responsive dark UI with gradients, motion, and accessible interactions for mobile, tablet, and desktop.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Design system', 'Performance', 'Accessibility', 'Scale-ready'].map((item) => (
                    <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-5 text-sm text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="container mx-auto grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading title="About Me" subtitle="Get to know me" />
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300">
              I am currently pursuing a B.Tech in Computer Science Engineering with a strong passion for web development, user experience, and clean interfaces. I enjoy exploring the latest frontend tools while building solid backend services. My work focuses on responsive design, accessibility, and performance.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              I love collaborating with teams to solve real-world problems and learning through building practical projects. Every new challenge is an opportunity to improve my code quality and deliver elegant digital products.
            </p>
          </div>

          <div className="glass-card rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft">
            <div className="flex flex-col gap-5 text-slate-200">
              <div className="h-72 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-pink-500/10 p-6 text-center text-slate-100">
                <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-4xl font-bold text-white">
                  N
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.28em] text-cyan-300/90">Professional Avatar</p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Education</p>
                  <p className="mt-2 text-base text-white">B.Tech – Computer Science Engineering | Aditya Engineering College</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-4">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Graduation</p>
                    <p className="mt-2 text-white">Expected 2027</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">CGPA</p>
                    <p className="mt-2 text-white">8.49</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading title="Skills" subtitle="What I bring" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard key={skill.label} label={skill.label} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading title="Experience" subtitle="Professional journey" />
          <div className="mt-12 grid gap-6">
            <TimelineItem
              title="Full Stack Development Intern"
              company="Technical Hub Private Limited – Kakinada"
              period="05/2025 – 03/2026"
              responsibilities={[
                'Worked on frontend and full stack web development concepts',
                'Built responsive web applications using HTML, CSS, and JavaScript',
                'Learned React.js, Node.js, and MongoDB fundamentals',
                'Worked on mini projects and UI development tasks',
              ]}
            />
          </div>
        </div>
      </section>

      <section id="projects" className="relative border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading title="Projects" subtitle="Recent work" />
          <div className="mt-12 grid gap-8 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="relative border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading title="Achievements" subtitle="Proven milestones" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Python', value: countValues.python, detail: '5★ HackerRank' },
              { label: 'Java', value: countValues.java, detail: '5★ HackerRank' },
              { label: 'JavaScript', value: countValues.javascript, detail: '3★ HackerRank' },
              { label: 'Code Challenge', value: countValues.code, detail: '30 Days of Code' },
            ].map((item) => (
              <motion.div key={item.label} whileHover={{ y: -8 }} className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-center shadow-soft">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                  <FaStar className="text-xl" />
                </div>
                <p className="text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="relative border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading title="Certifications" subtitle="Verified credentials" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Java (Basic & Intermediate)', issuer: 'HackerRank' },
              { title: 'SQL (Basic)', issuer: 'HackerRank' },
              { title: 'HTML, CSS, JavaScript & MongoDB', issuer: 'Cisco NetAcad' },
            ].map((item) => (
              <motion.div key={item.title} whileHover={{ y: -8 }} className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-soft">
                <div className="mb-3 inline-flex items-center gap-3 rounded-full bg-slate-900/70 px-4 py-2 text-sm text-slate-200">
                  <SiCisco className="text-cyan-300" />
                  <span>{item.issuer}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading title="Contact" subtitle="Let's connect" />
          <div className="mt-12">
            <ContactForm email="abc@gmail.com" linkedIn="https://linkedin.com/in/nikhila-sri-harshitha" phone="XXXXXXXXXX" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
