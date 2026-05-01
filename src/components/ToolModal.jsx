import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Heart, Copy, CheckCheck, Tag, Globe, DollarSign, BarChart2, Briefcase, Shield } from 'lucide-react'
import { useState } from 'react'
import categories from '../data/categories'

const pricingColors = {
  'Free': 'bg-green-50 text-green-700 border border-green-200',
  'Freemium': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Paid': 'bg-orange-50 text-orange-700 border border-orange-200',
}

const difficultyColors = {
  'Beginner': 'bg-green-50 text-green-700 border border-green-200',
  'Intermediate': 'bg-amber-50 text-amber-700 border border-amber-200',
  'Advanced': 'bg-red-50 text-red-700 border border-red-200',
}

export default function ToolModal({ tool, onClose, isFavorite, toggleFavorite }) {
  const [copied, setCopied] = useState(false)
  const cat = categories.find(c => c.id === tool?.category)

  useEffect(() => {
    if (!tool) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [tool, onClose])

  const handleCopy = () => {
    if (!tool) return
    navigator.clipboard.writeText(tool.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {tool && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 modal-overlay"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto scrollbar-thin">
              {/* Header */}
              <div className={`${cat?.color || 'bg-blue-600'} p-6 rounded-t-2xl`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">{tool.name}</h2>
                    <span className="inline-block px-2.5 py-0.5 bg-white/20 text-white text-xs font-semibold rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">{tool.description}</p>

                {/* Metadata grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-1.5">
                      <DollarSign size={12} /> Pricing
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${pricingColors[tool.pricing]}`}>
                      {tool.pricing}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-1.5">
                      <BarChart2 size={12} /> Difficulty
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColors[tool.difficulty]}`}>
                      {tool.difficulty}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-1.5">
                      <Globe size={12} /> Platform
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{tool.platform}</span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-1.5">
                      <Shield size={12} /> Category
                    </div>
                    <span className="text-xs font-semibold text-slate-700 leading-tight">{tool.category}</span>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="flex items-center gap-1.5 text-sm font-semibold text-slate-800 mb-2">
                    <Briefcase size={14} className="text-blue-500" /> Use Cases
                  </h4>
                  <ul className="space-y-1.5">
                    {tool.useCases.map(uc => (
                      <li key={uc} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="flex items-center gap-1.5 text-sm font-semibold text-slate-800 mb-2">
                    <Tag size={14} className="text-blue-500" /> Tags
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-500 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* URL */}
                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="text-xs font-medium text-slate-400 mb-1">Tool URL</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-600 truncate flex-1 font-mono">{tool.url}</span>
                  </div>
                </div>
              </div>

              {/* Footer actions */}
              <div className="px-6 pb-6 flex gap-2">
                <button
                  onClick={() => toggleFavorite(tool.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                    isFavorite
                      ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-red-200 hover:text-red-500'
                  }`}
                >
                  <Heart size={15} className={isFavorite ? 'fill-red-500' : ''} />
                  {isFavorite ? 'Saved' : 'Save'}
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  {copied ? <CheckCheck size={15} className="text-green-500" /> : <Copy size={15} />}
                  {copied ? 'Copied!' : 'Copy URL'}
                </button>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Open Tool <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
