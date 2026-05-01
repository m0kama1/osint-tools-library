import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Layers, ArrowRight, Shield, Globe, Users, Lock } from 'lucide-react'

const stats = [
  { label: 'OSINT Tools', value: '150+' },
  { label: 'Categories', value: '27' },
  { label: 'Free Tools', value: '80%' },
  { label: 'Use Cases', value: '200+' },
]

const pills = ['Cyber Investigations', 'Digital Forensics', 'Threat Intelligence', 'Journalism', 'Legal Research', 'Security Research']

export default function Hero({ setSearchQuery, setActiveCategory }) {
  return (
    <section className="relative overflow-hidden bg-hero">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Shield size={12} />
            Open Source Intelligence
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4"
          >
            OSINT Tools{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Library
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            An interactive library of open-source intelligence tools for cyber investigations,
            digital research, and online evidence collection.
          </motion.p>

          {/* Creator credit */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-blue-400/70 text-sm font-medium mb-8"
          >
            Created by <span className="text-blue-300 font-semibold">Mohamed Kamal</span>
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search tools, categories, tags…"
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all"
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
          >
            <Link to="/tools" className="btn-primary text-base px-7 py-3">
              <Search size={17} />
              Explore Tools
            </Link>
            <Link to="/categories" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-white/10 border border-white/15 text-white font-semibold text-base hover:bg-white/20 transition-all duration-200">
              <Layers size={17} />
              View Categories
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {pills.map(pill => (
              <span
                key={pill}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {stats.map(stat => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
