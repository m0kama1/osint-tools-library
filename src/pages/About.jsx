import { motion } from 'framer-motion'
import { Shield, User, Heart, Code2, Target, BookOpen, Github, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { icon: Shield, title: "150+ OSINT Tools", desc: "A curated library of tools across 27 intelligence categories." },
  { icon: Target, title: "Smart Filtering", desc: "Filter by category, pricing, difficulty, and platform in real-time." },
  { icon: Heart, title: "Save Favorites", desc: "Bookmark tools locally in your browser for quick access." },
  { icon: BookOpen, title: "Methodology Guide", desc: "Structured approach to professional OSINT investigations." },
  { icon: Code2, title: "Open Source", desc: "Built with React, Vite, Tailwind CSS, and Framer Motion." },
  { icon: Target, title: "GitHub Pages Ready", desc: "Deployable to GitHub Pages with a single npm command." },
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-hero rounded-2xl p-8 sm:p-12 text-center mb-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        <div className="relative">
          <div className="w-16 h-16 bg-blue-500/20 border border-blue-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield size={28} className="text-blue-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">OSINT Tools Library</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm mb-4 leading-relaxed">
            An interactive, searchable library of open-source intelligence tools for cyber investigations, digital research, and online evidence collection.
          </p>
          <p className="text-blue-300 text-sm font-medium">Created by <span className="font-bold text-white">Mohamed Kamal</span></p>
        </div>
      </motion.div>

      {/* About the project */}
      <div className="card p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Target size={18} className="text-blue-500" /> About This Project
        </h2>
        <div className="prose prose-sm text-slate-600 space-y-3">
          <p>
            The OSINT Tools Library was created to provide investigators, journalists, lawyers, cybersecurity researchers, and digital forensics specialists with a single, organized, and searchable reference for open-source intelligence tools.
          </p>
          <p>
            Inspired by the structure of the OSINT Framework, this library offers a modern, interactive interface with live search, category filtering, favorites management, and detailed tool information — all in a clean, professional design.
          </p>
          <p>
            The project is designed to be educational and to help professionals discover the right tool for every investigation task quickly and efficiently.
          </p>
        </div>
      </div>

      {/* Features grid */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="card p-4"
            >
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-2.5">
                <f.icon size={16} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800 text-sm mb-1">{f.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Creator */}
      <div className="card p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <User size={22} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-0.5">Mohamed Kamal</h3>
            <p className="text-blue-600 text-xs font-semibold mb-2">Creator & Developer</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              OSINT practitioner and cybersecurity researcher dedicated to building professional tools and resources for the digital investigation community.
            </p>
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="bg-slate-50 rounded-xl p-5">
        <h3 className="font-bold text-slate-700 text-sm mb-3 flex items-center gap-2">
          <Code2 size={15} className="text-slate-500" /> Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {['React 18', 'Vite 5', 'Tailwind CSS 3', 'Framer Motion', 'Lucide React', 'React Router 6'].map(tech => (
            <span key={tech} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/tools" className="btn-primary">Explore Tools</Link>
        <Link to="/disclaimer" className="btn-secondary">Read Disclaimer</Link>
      </div>
    </div>
  )
}
